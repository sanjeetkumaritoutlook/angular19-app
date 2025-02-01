import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploringMaterialComponent } from './exploring-material.component';

describe('ExploringMaterialComponent', () => {
  let component: ExploringMaterialComponent;
  let fixture: ComponentFixture<ExploringMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploringMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploringMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
