import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTicketInfoPage } from './home-ticket-info.page';

describe('HomeTicketInfoPage', () => {
  let component: HomeTicketInfoPage;
  let fixture: ComponentFixture<HomeTicketInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTicketInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTicketInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
