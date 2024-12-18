import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseDataComponent } from './response-data.component';

describe('ResponseDataComponent', () => {
  let component: ResponseDataComponent;
  let fixture: ComponentFixture<ResponseDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponseDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
