import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientrequestsComponent } from './recipientrequests.component';

describe('RecipientrequestsComponent', () => {
  let component: RecipientrequestsComponent;
  let fixture: ComponentFixture<RecipientrequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipientrequestsComponent]
    });
    fixture = TestBed.createComponent(RecipientrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
