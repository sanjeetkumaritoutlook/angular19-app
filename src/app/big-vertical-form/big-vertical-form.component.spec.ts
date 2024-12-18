import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigVerticalFormComponent } from './big-vertical-form.component';

describe('BigVerticalFormComponent', () => {
  let component: BigVerticalFormComponent;
  let fixture: ComponentFixture<BigVerticalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigVerticalFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigVerticalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
