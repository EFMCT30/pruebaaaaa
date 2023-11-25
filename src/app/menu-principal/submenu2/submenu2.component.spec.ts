import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Submenu2Component } from './submenu2.component';

describe('Submenu2Component', () => {
  let component: Submenu2Component;
  let fixture: ComponentFixture<Submenu2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Submenu2Component]
    });
    fixture = TestBed.createComponent(Submenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
