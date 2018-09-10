import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EolUpdateComponent } from './eol-update.component';

describe('EolUpdateComponent', () => {
  let component: EolUpdateComponent;
  let fixture: ComponentFixture<EolUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EolUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EolUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
