import { Component, Input, OnInit } from '@angular/core';
import { SectionContentType } from '../../model/fluid-docs-content.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { ComponentSelector } from '../component-selector.enum';

@Component({
  selector: 'app-content-block',
  templateUrl: './content-block.component.html',
})
export class ContentBlockComponent implements OnInit {
  SectionContentType = SectionContentType;
  Components = ComponentSelector;

  @Input() content: any;
  @Input() removeTopGutter: boolean;
  @Input() type: SectionContentType;
  @Input() opts: { [key: string]: any };

  constructor(private s: DomSanitizer) {}

  ngOnInit(): void {}

  toSafeHtml(val) {
    return this.s.bypassSecurityTrustHtml(val);
  }
}
