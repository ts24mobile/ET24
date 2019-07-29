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
    id: 'FC' + this.genRandomNumberString(10, "num"),
    adult_quantity: 0,
    adult_price: 590000,
    child_quantity: 0,
    child_price: 390000,
    total: 0,
    full_name: "",
    company_name: 'Suối Tiên',
    ticket_name: "Vé tour tham quan Suối Tiên",
    date: new Date().toJSON().slice(0, 10),
    img_url: 'https://www.suoitien.com//Data/Sites/1/Banner/Default/default.png'
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

  genRandomNumberString(numberRan, type?: any) {
    numberRan = numberRan || 5;
    type = type || 'all';
    var text = "", possible = "";
    switch (type) {
      case 'all':
        possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        break;
      case 'num':
        possible = "0123456789";
        break;
      case 'str':
        possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        break;
    }

    for (var i = 0; i < numberRan; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
