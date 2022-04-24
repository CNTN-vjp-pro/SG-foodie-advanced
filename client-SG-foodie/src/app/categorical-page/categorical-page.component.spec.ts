import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoricalPageComponent } from './categorical-page.component';

describe('CategoricalPageComponent', () => {
  let component: CategoricalPageComponent;
  let fixture: ComponentFixture<CategoricalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoricalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoricalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
