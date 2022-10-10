import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashbord3Component } from './dashbord3.component';

describe('Dashbord3Component', () => {
  let component: Dashbord3Component;
  let fixture: ComponentFixture<Dashbord3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dashbord3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashbord3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
