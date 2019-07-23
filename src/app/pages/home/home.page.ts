import { Component, OnInit } from '@angular/core';
import { NavControllerService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private navCrl: NavControllerService
  ) { }

  ngOnInit() {
  }

  place_onClick() {
    this.navCrl.push('tabs/home/home-detail');
  }
}
