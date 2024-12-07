import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeProviderService } from './services/theme-provider.service';
import { Router } from '@angular/router';
import { ContentService } from './services/content.service';
import { JsFramework } from './model/js-framework.enum';
import { headerLinks } from './content/header.content';
import { supportedFrameworks } from './config/framework.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('themeRef') themeRef: ElementRef;

  JSFramework = JsFramework;

  /**
   * User Selections
   */
  settingsVisible: boolean = false;
  theme$: Observable<string>;
  selectedFramework$: Observable<JsFramework>;

  /**
   * Render Blocker (prevent FOUC)
   */
  shouldRender = false;
  docsLoaded = false;

  /**
   * Navigation Links
   */
  headerLinks = headerLinks(window.location.pathname);
  settingsBtnConfig = {
    inheritIconColor: true,
    icon: {
      key: 'settings',
      size: 'md',
    },
    popoverConfig: {
      message:
        'Use the new settings menu to set your chosen framework and theme!',
      persistable: false,
    },
  };

  constructor(
    private readonly themeProvider: ThemeProviderService,
    private readonly router: Router,
    private contentService: ContentService
  ) {}

  /**
   * Lifecycle Hooks
   */

  ngOnInit(): void {
    this.theme$ = this.themeProvider.getTheme();
    this.selectedFramework$ = this.contentService.getFrameworkChoice();
    this.contentService.getJsonDocs().subscribe((docs) => {
      if (docs) {
        this.docsLoaded = true;
      }
    });
    this.contentService.loadJsonDocs();
  }

  ngAfterViewInit() {
    this.shouldAppRender();
    this.contentService.getUserSettings();
  }

  /**
   * Navigation
   */
  navigate(link: string) {
    this.router.navigate([link]);
  }
  toggleSettings(visible: boolean) {
    this.settingsVisible = visible;
  }

  /**
   * Content Changes
   */
  changeTheme(theme: string) {
    this.themeProvider.setTheme(theme);
  }
  changeFramework(framework: JsFramework) {
    this.contentService.setFrameworkChoice(framework);
  }
  isSelected(checked: string, checkOn: string) {
    return checked === checkOn ? 'tertiary' : 'secondary';
  }

  getFrameworks() {
    return supportedFrameworks.map((framework) => framework.name);
  }

  /**
   * Checks to see if the fluid-theme-provider custom element has been defined, i.e. once fluid has loaded.
   * This should prevent any content being displayed before components are styled.
   */
  shouldAppRender() {
    customElements.whenDefined('fluid-theme-provider').then(() => {
      this.themeRef.nativeElement.componentOnReady().then(() => {
        this.shouldRender = true;
      });
    });
  }

  getYear() {
    return new Date().getFullYear();
  }
}
