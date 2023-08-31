import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorscheduleComponent } from './donorschedule.component';

describe('DonorscheduleComponent', () => {
  let component: DonorscheduleComponent;
  let fixture: ComponentFixture<DonorscheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorscheduleComponent]
    });
    fixture = TestBed.createComponent(DonorscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
