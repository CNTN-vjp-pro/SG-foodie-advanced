import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoricalPageComponent } from './admin-categorical-page.component';

describe('AdminCategoricalPageComponent', () => {
  let component: AdminCategoricalPageComponent;
  let fixture: ComponentFixture<AdminCategoricalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoricalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoricalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
