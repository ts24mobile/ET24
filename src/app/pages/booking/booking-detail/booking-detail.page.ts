import { NavControllerService } from './../../../services/navcontroller-service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.page.html',
  styleUrls: ['./booking-detail.page.scss'],
})
export class BookingDetailPage implements OnInit {
  paymentPage: boolean = false;
  cart: any;
  date_format: any;
  cart_createdCode = [];

  constructor(
    private navCrl: NavControllerService
  ) {

    if (this.navCrl.get("paymentPage") != undefined)
      this.paymentPage = this.navCrl.get("paymentPage");
    if (this.navCrl.get("cart") != undefined) {
      this.cart = this.navCrl.get("cart");
      this.date_format = moment(this.cart.date).format('DD-MM-YYYY');
      let i = 0;
      for (let index = 0; index < this.cart.adult_quantity; index++) {
        i++;
        this.cart_createdCode.push({
          price: this.cart.adult_price,
          ticket_name: 'Vé người lớn',
          name_customer: this.cart.full_name,
          id: this.cart.id + '-' + i,
          date: this.cart.date
        });

      }
      for (let index = 0; index < this.cart.child_quantity; index++) {
        i++;
        this.cart_createdCode.push({
          price: this.cart.child_price,
          ticket_name: 'Vé trẻ em (100cm - 140cm)',
          name_customer: this.cart.full_name,
          id: this.cart.id + '-' + i,
          date: this.cart.date
        });

      }
      console.log(this.cart_createdCode);
    }
    this.date_format = moment(this.cart.date).format("DD-MM-YYYY");
  }

  ngOnInit() {
  }

  paymentPage_onBack() {
    this.navCrl.pop("tabs/home");
  }
  convert_QRCode(code) {
    return JSON.stringify(code);
  }
}
