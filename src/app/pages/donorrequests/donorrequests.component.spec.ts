import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorrequestsComponent } from './donorrequests.component';

describe('DonorrequestsComponent', () => {
  let component: DonorrequestsComponent;
  let fixture: ComponentFixture<DonorrequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorrequestsComponent]
    });
    fixture = TestBed.createComponent(DonorrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
