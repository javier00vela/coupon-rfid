import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCouponPersonComponent } from './manage-coupon-person.component';

describe('ManageCouponPersonComponent', () => {
  let component: ManageCouponPersonComponent;
  let fixture: ComponentFixture<ManageCouponPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCouponPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCouponPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
