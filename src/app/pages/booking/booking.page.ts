import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NavControllerService } from 'src/app/services';
import { Events } from '@ionic/angular';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  list_booking = [{
    id: 'FC1562387110',
    adult_quantity: 0,
    adult_price: 0,
    child_quantity: 0,
    child_price: 730000,
    total: 730000,
    full_name: "",
    ticket_name: "Combo Vé Bà Nà Hill với Voucher Buffet Trưa Little Tokyo",
    company_name: 'Vé Bà Nà Hills Đà Nẵng',
    date: moment(new Date()).format("DD/MM/YYYY"),
    "img_url": "https://res.klook.com/image/upload/fl_lossy.progressive,q_65,f_auto/c_fill,w_200,h_133/activities/vec3azfslufi40dgb8dk.jpg"
  }];
  new_date = moment(new Date()).format("DD/MM/YYYY HH:MM")
  constructor(
    private navCrl: NavControllerService,
    private ev: Events,
  ) {
    this.ev.subscribe("update_listBooking", msg => {
      console.log(msg);
      this.loadData();
    });
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.loadData();
  }

  loadData() {
    if (localStorage.getItem("BookingOrder") != null || localStorage.getItem("BookingOrder") != undefined) {
      let list_booking_local = JSON.parse(localStorage.getItem("BookingOrder"));
      if (list_booking_local.length > 0)
        for (let index = list_booking_local.length - 1; index >= 0; index--) {
          const element = list_booking_local[index];
          element.date = moment(element.date).format("DD-MM-YYYY");
          if (!this.checkItemExists(element))
            this.list_booking.unshift(element);
        }
    }
  }
  checkItemExists(element) {
    for (let index = 0; index < this.list_booking.length; index++) {
      const element_current = this.list_booking[index];
      if (element_current.id == element.id)
        return true;
    }
    return false;
  }
  _onRefresh(refresher) {
    this.loadData();
    return refresher.target.complete();
  }


  list_booking_onItemClick(event, booking) {
    event.stopPropagation();
    this.navCrl.push('booking-detail', { 'cart': booking });
  }
}
