import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NavControllerService } from 'src/app/services';
@Component({
  selector: 'app-home-ticket-booking-form',
  templateUrl: './home-ticket-booking-form.page.html',
  styleUrls: ['./home-ticket-booking-form.page.scss'],
})
export class HomeTicketBookingFormPage implements OnInit {

  cart = {
    adult_quantity: 0,
    adult_price: 590000,
    child_quantity: 0,
    child_price: 390000,
    total: 0,
    full_name: "",
    date: new Date().toJSON().slice(0, 10),
  }
  currentDay: string;
  constructor(
    private navCrl: NavControllerService
  ) { }

  ngOnInit() {
    this.currentDay = new Date().toJSON().slice(0, 10);
  }

  calcTotal(cart) {
    cart.total = (cart.adult_quantity * cart.adult_price) + (cart.child_quantity * cart.child_price);
  }
  AddSub_Adult_OnClick(cart, type) {
    switch (type) {
      case 'add':
        cart.adult_quantity = cart.adult_quantity + 1;
        break;
      case 'sub':
        if (cart.adult_quantity > 0)
          cart.adult_quantity = cart.adult_quantity - 1;
        break;
      default:
        break;
    }
    this.calcTotal(cart);

  }

  AddSub_Child_OnClick(cart, type) {
    switch (type) {
      case 'add':
        cart.child_quantity = cart.child_quantity + 1;
        break;
      case 'sub':
        if (cart.child_quantity > 0)
          cart.child_quantity = cart.child_quantity - 1;
        break;
      default:
        break;
    }
    this.calcTotal(cart);

  }

  Booking() {
    this.cart.date = moment(this.cart.date).format('YYYY-MM-DD');
    this.navCrl.push('home-ticket-payment', { cart: this.cart });
  }
}
