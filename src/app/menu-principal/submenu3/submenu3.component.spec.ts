import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Submenu3Component } from './submenu3.component';

describe('Submenu3Component', () => {
  let component: Submenu3Component;
  let fixture: ComponentFixture<Submenu3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Submenu3Component]
    });
    fixture = TestBed.createComponent(Submenu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
