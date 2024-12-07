import { Component, Input, OnInit } from '@angular/core';
import {
  FluidPageSection,
  SectionContentType,
} from '../../model/fluid-docs-content.interface';
import { toPageId } from '../../content/content.utils';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
})
export class ContentSectionComponent implements OnInit {
  SectionContentType = SectionContentType;

  @Input() section: FluidPageSection;
  @Input() removeTitle: boolean;
  @Input() fullWidth: boolean;

  _pageAnchor: string;

  constructor() {}

  ngOnInit(): void {
    this._pageAnchor = toPageId(this.section.title);
  }
}
