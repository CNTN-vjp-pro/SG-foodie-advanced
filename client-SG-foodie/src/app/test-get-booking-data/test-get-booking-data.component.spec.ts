import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGetBookingDataComponent } from './test-get-booking-data.component';

describe('TestGetBookingDataComponent', () => {
  let component: TestGetBookingDataComponent;
  let fixture: ComponentFixture<TestGetBookingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestGetBookingDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGetBookingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
