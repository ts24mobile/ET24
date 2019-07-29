import { NavControllerService } from './../../../services/navcontroller-service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Events } from '@ionic/angular';
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
    company_name: 'Suối Tiên',
    ticket_name: "Vé tour tham quan Suối Tiên",
    date: new Date().toJSON().slice(0, 10),
    img_url: 'https://www.suoitien.com//Data/Sites/1/Banner/Default/default.png'
  }
  date_format = "0";
  list_booking = [];
  constructor(
    private navCrl: NavControllerService,
    private ev: Events,
  ) { }

  ngOnInit() {
    if (this.navCrl.get("cart") != undefined)
      this.cart = this.navCrl.get("cart");
    this.date_format = moment(this.cart.date).format("DD-MM-YYYY");
    console.log(this.cart);
  }

  BookNow() {
    if (localStorage.getItem("BookingOrder") != null || localStorage.getItem("BookingOrder") != undefined) {
      this.list_booking = JSON.parse(localStorage.getItem("BookingOrder"));
    }
    this.list_booking.unshift(this.cart);
    localStorage.setItem("BookingOrder", JSON.stringify(this.list_booking));
    this.navCrl.push("booking-detail", { cart: this.cart, paymentPage: true });
    this.ev.publish("update_listBooking", "1");
  }
}
