import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportRxjsComponent } from './import-rxjs.component';

describe('ImportRxjsComponent', () => {
  let component: ImportRxjsComponent;
  let fixture: ComponentFixture<ImportRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportRxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
