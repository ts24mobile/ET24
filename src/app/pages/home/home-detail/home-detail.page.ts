import { Component, OnInit } from '@angular/core';
import { NavControllerService } from 'src/app/services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {

  constructor(
    private navCrl: NavControllerService
  ) { }

  ngOnInit() {
  }

  ticket_onClick() {
    this.navCrl.push("home-ticket-info");
  }
}
