import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveRootComponent } from './reactive-root.component';

describe('ReactiveRootComponent', () => {
  let component: ReactiveRootComponent;
  let fixture: ComponentFixture<ReactiveRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
