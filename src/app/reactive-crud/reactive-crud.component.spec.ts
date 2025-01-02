import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCrudComponent } from './reactive-crud.component';

describe('ReactiveCrudComponent', () => {
  let component: ReactiveCrudComponent;
  let fixture: ComponentFixture<ReactiveCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
