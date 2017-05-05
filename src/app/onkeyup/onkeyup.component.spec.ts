/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OnkeyupComponent } from './onkeyup.component';

describe('OnkeyupComponent', () => {
  let component: OnkeyupComponent;
  let fixture: ComponentFixture<OnkeyupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnkeyupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnkeyupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
