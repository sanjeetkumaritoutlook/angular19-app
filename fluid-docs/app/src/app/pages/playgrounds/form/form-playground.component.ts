import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gridNoRowsConfig } from './config/grid-no-rows.config';
import { gridRowsWithColumnConfig } from './config/grid-with-rows.config';
import { timer } from 'rxjs';
import { horizontalFormConfig } from './config/horizontal-form.config';
import { verticalFormConfig } from './config/vertical-form.config';
import { gridWithRowsConfig } from './config/grid-row-column.config';

@Component({
  selector: 'app-form-playground',
  templateUrl: './form-playground.component.html',
})
export class FormPlaygroundComponent implements OnInit {
  @ViewChild('formRef') formRef: ElementRef;

  formConfig: any;
  configs = [
    { label: 'Load Rows with Columns', config: gridRowsWithColumnConfig },
    { label: 'Load Grid with Rows', config: gridWithRowsConfig },
    { label: 'Load Grid Config', config: gridNoRowsConfig },
    { label: 'Load Horizontal Config', config: horizontalFormConfig },
    { label: 'Load Vertical Config', config: verticalFormConfig },
  ];

  formDisabled: boolean;
  formValid: boolean;
  formErrors: string[];

  loadingSkeletonConfig = {
    skeletonType: 'form',
    rows: 4,
    animationType: 'wave',
  };

  states = {};

  eventOutput: { [key: string]: any } = {};

  constructor() {}

  ngOnInit(): void {}

  setConfig(config: { label: string; config: object }) {
    this.formConfig = undefined;
    timer(500).subscribe(() => {
      this.formConfig = config.config;
    });
  }

  setArrayValue() {
    this.formRef.nativeElement.setElementValue('formArrayTest', [
      {
        nestedFormOne: 'oneA',
        nestedFormTwo: 1,
        nestedFormThree: '2021-01-01',
      },
      {
        nestedFormOne: 'oneB',
        nestedFormTwo: 2,
        nestedFormThree: '2021-01-02',
      },
      {
        nestedFormOne: 'oneC',
        nestedFormTwo: 3,
        nestedFormThree: '2021-01-03',
      },
      {
        nestedFormOne: 'oneD',
        nestedFormTwo: 4,
        nestedFormThree: '2021-01-04',
      },
      {
        nestedFormOne: 'oneE',
        nestedFormTwo: 5,
        nestedFormThree: '2021-01-05',
      },
    ]);
  }

  toggleDisabled(dataPath: string) {
    this.states[dataPath] = !this.states[dataPath];
    this.formRef.nativeElement.setDisabled(this.states[dataPath], dataPath);
  }

  toggleElementConfig(dataPath: string) {
    this.states[dataPath] = !this.states[dataPath];
    this.formRef.nativeElement.setElementConfig(
      dataPath,
      'disabled',
      this.states[dataPath]
    );
  }

  toggleElementConfigByUpdate(dataPath: string) {
    this.states[dataPath] = !this.states[dataPath];
    this.formRef.nativeElement.setElementConfig(dataPath, null, null, {
      disabled: this.states[dataPath],
    });
  }

  resetFormDisabled() {
    this.formRef.nativeElement.restoreOriginalConfiguration();
  }

  toggleFormEnabled() {
    this.formDisabled = !this.formDisabled;
    this.states = this.formConfig.elements.reduce((state, el) => {
      state[el.dataPath] = this.formDisabled;
      return state;
    }, {});
    this.formRef.nativeElement.setDisabled(this.formDisabled);
  }

  hasElement(dataPath) {
    return !!this.formConfig?.elements.find((el) => el.dataPath === dataPath);
  }

  // Form Events
  onFormEvent(key: string, detail: any) {
    if (key === 'formChanged') {
      this.formValid = detail.valid;
      this.formErrors = detail.errors;
      console.log(detail);
    }
    this.eventOutput[key] = detail;
  }

  firedEvents() {
    return Object.keys(this.eventOutput).map((event) => ({
      event,
      data: this.eventOutput[event],
    }));
  }
}
