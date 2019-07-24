import { Component, OnInit } from '@angular/core';
import { NavControllerService } from 'src/app/services';

@Component({
  selector: 'app-home-ticket-info',
  templateUrl: './home-ticket-info.page.html',
  styleUrls: ['./home-ticket-info.page.scss'],
})
export class HomeTicketInfoPage implements OnInit {

  constructor(private navCrl: NavControllerService) { }

  ngOnInit() {
  }

  BookNow() {
    this.navCrl.push("home-ticket-booking-form");
  }
}
