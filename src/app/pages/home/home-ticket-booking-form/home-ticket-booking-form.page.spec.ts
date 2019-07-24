import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTicketBookingFormPage } from './home-ticket-booking-form.page';

describe('HomeTicketBookingFormPage', () => {
  let component: HomeTicketBookingFormPage;
  let fixture: ComponentFixture<HomeTicketBookingFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTicketBookingFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTicketBookingFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
