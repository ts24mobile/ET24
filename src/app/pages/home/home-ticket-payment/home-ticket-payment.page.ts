import { NavControllerService } from './../../../services/navcontroller-service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-home-ticket-payment',
  templateUrl: './home-ticket-payment.page.html',
  styleUrls: ['./home-ticket-payment.page.scss'],
})
export class HomeTicketPaymentPage implements OnInit {
  cart: any = {
    id: 'FC1562387115',
    adult_quantity: 0,
    adult_price: 590000,
    child_quantity: 0,
    child_price: 390000,
    total: 0,
    full_name: "",
    date: new Date().toJSON().slice(0, 10)
  }
  date_format = "0";
  constructor(
    private navCrl: NavControllerService
  ) { }

  ngOnInit() {
    if (this.navCrl.get("cart") != undefined)
      this.cart = this.navCrl.get("cart");
    this.date_format = moment(this.cart.date).format("DD-MM-YYYY");
    console.log(this.cart);
  }

  BookNow() {
    this.cart.id = 'FC1562387115';
    this.navCrl.push("booking-detail", { cart: this.cart, paymentPage: true });
  }
}
