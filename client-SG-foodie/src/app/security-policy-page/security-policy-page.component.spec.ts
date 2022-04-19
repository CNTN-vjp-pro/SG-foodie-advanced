import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPolicyPageComponent } from './security-policy-page.component';

describe('SecurityPolicyPageComponent', () => {
  let component: SecurityPolicyPageComponent;
  let fixture: ComponentFixture<SecurityPolicyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityPolicyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityPolicyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
