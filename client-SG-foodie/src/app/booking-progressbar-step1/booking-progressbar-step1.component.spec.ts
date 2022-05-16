import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingProgressbarStep1Component } from './booking-progressbar-step1.component';

describe('BookingProgressbarStep1Component', () => {
  let component: BookingProgressbarStep1Component;
  let fixture: ComponentFixture<BookingProgressbarStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingProgressbarStep1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingProgressbarStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
