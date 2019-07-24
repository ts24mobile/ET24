import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTicketPaymentPage } from './home-ticket-payment.page';

describe('HomeTicketPaymentPage', () => {
  let component: HomeTicketPaymentPage;
  let fixture: ComponentFixture<HomeTicketPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTicketPaymentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTicketPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
