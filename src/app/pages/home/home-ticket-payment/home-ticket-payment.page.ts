import { NavControllerService } from './../../../services/navcontroller-service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Events } from '@ionic/angular';
import { Code_SuoiTien_Model } from 'src/app/model';
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
    img_url: 'https://www.suoitien.com//Data/Sites/1/Banner/Default/default.png',
    customer_group: "0"
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
    let Code_model = new Code_SuoiTien_Model();
    Code_model.phamViSuDung = "1";
    Code_model.maHieuQuayVe = "12";
    Code_model.ngayTaoMa = moment(this.cart.date).format("YYMMDD");
    Code_model.loaiDichVu = "001";
    let adult_quantity = this.cart.adult_quantity > 10 ? this.cart.adult_quantity : '0' + this.cart.adult_quantity;
    let child_quantity = this.cart.child_quantity > 10 ? this.cart.child_quantity : '0' + this.cart.child_quantity;
    Code_model.kiemSoatRaVao = adult_quantity + "" + child_quantity;

    Code_model.soThuTu = this.genRandomNumberString(5, "num");
    Code_model.generate_maVe();
    this.cart.id = Code_model.maVe;

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
