import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { JsFramework } from '../model/js-framework.enum';
import {
  FluidPageContent,
  FluidPageSectionStyle,
} from '../model/fluid-docs-content.interface';
import { JsonDocs } from '../../assets/docs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ExtendedJsonDocs } from '../model/extendedJsonDocsComponent';
import { underConstructionContent } from '../content/under-construction.content';
import { toSlug } from '../content/content.utils';
import { leftContentSidebarConfig } from '../config/left-content-sidebar.config';
import { leftComponentSidebarConfig } from '../config/left-component-sidebar.config';
import { COMPONENTS, OVERVIEW, WALKTHROUGHS } from '../config/page-url.config';
import {
  pageContent,
  parseComponentContent,
  parseEnumContent,
  parseInterfaceContent,
  parseWalkthroughContent,
  subSectionContent,
} from '../content/page.content';
import { overviewContent } from '../content/overview.content';

import { CacheService } from './cache.service';
import { environment } from '../../environments/environment';

const FLUID_USER_SETTINGS = '_fluid-user-settings';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(
    private http: HttpClient,
    private readonly cacheService: CacheService
  ) {}

  selectedFramework$: BehaviorSubject<JsFramework> =
    new BehaviorSubject<JsFramework>(JsFramework.ANGULAR);
  currentPageContent$: BehaviorSubject<FluidPageContent> =
    new BehaviorSubject<FluidPageContent>(null);
  assetsError$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  jsonDocs$: BehaviorSubject<ExtendedJsonDocs> =
    new BehaviorSubject<ExtendedJsonDocs>(null);
  sidebarContent$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  _currentPageId: string;
  _currentSectionId: string;
  _subSectionContent: { [key: string]: any };

  underConstructionContent = underConstructionContent();

  getAssetsError() {
    return this.assetsError$.asObservable();
  }

  getContent() {
    return this.currentPageContent$.asObservable();
  }

  setCurrentPage(pageId: string, subsectionId?: string) {
    if (!pageId) {
      pageId = toSlug(OVERVIEW.id);
    }

    const componentSidebarIds = [COMPONENTS.id, WALKTHROUGHS.id];

    this._currentPageId = toSlug(pageId);
    const _jsonDocs = this.jsonDocs$.getValue();
    const _selectedFramework = this.selectedFramework$.getValue();
    this.setSidebar(
      componentSidebarIds.includes(pageId)
        ? leftComponentSidebarConfig(_jsonDocs)
        : leftContentSidebarConfig(pageId)
    );

    if (this._currentPageId) {
      const currentPageContent = _jsonDocs
        ? pageContent(_selectedFramework, _jsonDocs)[this._currentPageId]
        : overviewContent();

      this.currentPageContent$.next(
        currentPageContent &&
          this.loadSubSectionContent(
            currentPageContent,
            this._currentPageId,
            subsectionId
          )
      );
    }
  }

  setSidebar(sidebarContent: any) {
    this.sidebarContent$.next(sidebarContent);
  }
  getSidebar() {
    return this.sidebarContent$.asObservable();
  }

  loadSubSectionContent(
    currentPageContent: FluidPageContent,
    pageId: string,
    subsectionId: string
  ) {
    if (!!subsectionId) {
      this._currentSectionId = subsectionId;
      const subsectionContent =
        this._subSectionContent[pageId]?.[toSlug(subsectionId)];
      return !!subsectionContent
        ? currentPageContent.sectionStyle === FluidPageSectionStyle.SUBSECTION
          ? subsectionContent
          : ({
              ...currentPageContent,
              sections: subsectionContent,
            } as FluidPageContent)
        : this.underConstructionContent;
    }
    return currentPageContent;
  }

  setFrameworkChoice(selectedFramework: JsFramework): void {
    this.selectedFramework$.next(selectedFramework);
  }

  getUserSettings() {
    if (!!localStorage.getItem(FLUID_USER_SETTINGS)) {
      const { theme, framework } = JSON.parse(
        localStorage.getItem(FLUID_USER_SETTINGS)
      );
      console.log(`User is using ${framework} with ${theme} theme.`);
    }
  }

  getFrameworkChoice(): Observable<JsFramework> {
    return this.selectedFramework$.asObservable();
  }

  getJsonDocs(): Observable<JsonDocs> {
    return this.jsonDocs$.asObservable();
  }

  loadJsonDocs() {
    let docs;
    let testResults;
    this.http.get(environment.fluid.docs).subscribe((_docs) => {
      docs = _docs;
      this.http.get(environment.fluid.tests).subscribe((_testResults) => {
        testResults = _testResults;

        if (docs && testResults) {
          this._subSectionContent = subSectionContent(
            parseInterfaceContent(docs),
            parseEnumContent(docs),
            parseComponentContent(docs, testResults),
            parseWalkthroughContent(docs)
          );
          this.jsonDocs$.next(docs);
        }
      });
    });

    return this.jsonDocs$;
  }

  expandSignature(rawInterface: object, parentInterfaceName: string) {
    const interfaces = this.jsonDocs$.getValue().interfaces;
    return Object.keys(rawInterface).reduce((obj, key) => {
      const dataType = rawInterface[key];
      if (interfaces[dataType] && dataType !== parentInterfaceName) {
        obj[key] = this.expandSignature(interfaces[dataType], dataType);
      } else {
        obj[key] = dataType;
      }
      return obj;
    }, {});
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
