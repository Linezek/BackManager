import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EolNotificationComponent } from './eol-notification.component';

describe('EolNotificationComponent', () => {
  let component: EolNotificationComponent;
  let fixture: ComponentFixture<EolNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EolNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EolNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
