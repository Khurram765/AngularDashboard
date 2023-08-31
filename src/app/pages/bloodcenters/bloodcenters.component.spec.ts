import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodcentersComponent } from './bloodcenters.component';

describe('BloodcentersComponent', () => {
  let component: BloodcentersComponent;
  let fixture: ComponentFixture<BloodcentersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloodcentersComponent]
    });
    fixture = TestBed.createComponent(BloodcentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
