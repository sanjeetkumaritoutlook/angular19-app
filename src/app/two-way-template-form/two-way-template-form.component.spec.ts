import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayTemplateFormComponent } from './two-way-template-form.component';

describe('TwoWayTemplateFormComponent', () => {
  let component: TwoWayTemplateFormComponent;
  let fixture: ComponentFixture<TwoWayTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayTemplateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
