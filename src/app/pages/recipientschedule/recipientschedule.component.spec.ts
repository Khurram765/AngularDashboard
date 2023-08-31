import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientscheduleComponent } from './recipientschedule.component';

describe('RecipientscheduleComponent', () => {
  let component: RecipientscheduleComponent;
  let fixture: ComponentFixture<RecipientscheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipientscheduleComponent]
    });
    fixture = TestBed.createComponent(RecipientscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
