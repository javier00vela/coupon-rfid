import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePersonComponent } from './manage-person.component';

describe('ManagePersonComponent', () => {
  let component: ManagePersonComponent;
  let fixture: ComponentFixture<ManagePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
