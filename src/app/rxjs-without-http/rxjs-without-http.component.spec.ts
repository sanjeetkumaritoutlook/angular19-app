import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsWithoutHttpComponent } from './rxjs-without-http.component';

describe('RxjsWithoutHttpComponent', () => {
  let component: RxjsWithoutHttpComponent;
  let fixture: ComponentFixture<RxjsWithoutHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsWithoutHttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsWithoutHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
