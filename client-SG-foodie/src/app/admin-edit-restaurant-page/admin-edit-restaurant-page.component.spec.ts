import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditRestaurantPageComponent } from './admin-edit-restaurant-page.component';

describe('AdminEditRestaurantPageComponent', () => {
  let component: AdminEditRestaurantPageComponent;
  let fixture: ComponentFixture<AdminEditRestaurantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditRestaurantPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditRestaurantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
