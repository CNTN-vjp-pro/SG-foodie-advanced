import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingProgressbarStep2Component } from './booking-progressbar-step2.component';

describe('BookingProgressbarStep2Component', () => {
  let component: BookingProgressbarStep2Component;
  let fixture: ComponentFixture<BookingProgressbarStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingProgressbarStep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingProgressbarStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
