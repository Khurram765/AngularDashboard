import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonoractivityComponent } from './donoractivity.component';

describe('DonoractivityComponent', () => {
  let component: DonoractivityComponent;
  let fixture: ComponentFixture<DonoractivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonoractivityComponent]
    });
    fixture = TestBed.createComponent(DonoractivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
