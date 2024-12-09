import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { JsFramework } from '../../model/js-framework.enum';
import { ComponentSelector } from '../component-selector.enum';
import {
  toAngularMethod,
  toJavascriptMethod,
  toReactMethod,
  toSvelteMethod,
  toVueMethod,
} from './framework.method';
import {
  toAngularEvent,
  toJavascriptEvent,
  toReactEvent,
  toSvelteEvent,
  toVueEvent,
} from './framework.event';

@Component({
  selector: `${ComponentSelector.FRAMEWORK_SNIPPET}`,
  templateUrl: './framework-snippet.component.html',
})
export class FrameworkSnippetComponent implements OnInit {
  // Method Props
  @Input() name: string;
  @Input() refName: string;
  @Input() args: any[];

  // Event Props
  @Input() elementName: string;
  @Input() eventName: string;

  @Input() snippetType;

  _codeSnippet: string;
  _type = 'js';

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getFrameworkChoice().subscribe((framework) => {
      switch (this.snippetType) {
        case 'event':
          this.loadEvent(framework);
          break;
        default:
          this.loadMethod(framework);
      }
    });
  }

  loadMethod(framework: JsFramework) {
    switch (framework) {
      case JsFramework.JAVASCRIPT:
        this._codeSnippet = toJavascriptMethod(
          this.refName,
          this.name,
          this.args
        );
        break;
      case JsFramework.ANGULAR:
        this._codeSnippet = toAngularMethod(this.refName, this.name, this.args);
        break;
      case JsFramework.SVELTE:
        this._codeSnippet = toSvelteMethod(this.refName, this.name, this.args);
        break;
      case JsFramework.VUE:
        this._codeSnippet = toVueMethod(this.refName, this.name, this.args);
        break;
      case JsFramework.REACT:
        this._codeSnippet = toReactMethod(this.refName, this.name, this.args);
        break;
    }
  }

  loadEvent(framework: JsFramework) {
    this._type = 'html';
    switch (framework) {
      case JsFramework.JAVASCRIPT:
        this._codeSnippet = toJavascriptEvent(this.elementName, this.eventName);
        break;
      case JsFramework.ANGULAR:
        this._codeSnippet = toAngularEvent(this.elementName, this.eventName);
        break;
      case JsFramework.SVELTE:
        this._codeSnippet = toSvelteEvent(this.elementName, this.eventName);
        break;
      case JsFramework.VUE:
        this._codeSnippet = toVueEvent(this.elementName, this.eventName);
        break;
      case JsFramework.REACT:
        this._codeSnippet = toReactEvent(this.elementName, this.eventName);
        this._type = 'jsx';
        break;
    }
  }
}
