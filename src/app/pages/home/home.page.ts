import { Code_SuoiTien_Model } from './../../model/suoitien-code-model';
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
    // let Code_model = new Code_SuoiTien_Model();
    // Code_model.phamViSuDung = "1";
    // Code_model.maHieuQuayVe = "12";
    // Code_model.ngayTaoMa = "190714";
    // Code_model.loaiDichVu = "326";
    // Code_model.kiemSoatRaVao = "0502";
    // Code_model.soThuTu = "00139";
    // Code_model.generate_maVe();
    // console.log(Code_model);
  }

  place_onClick() {
    this.navCrl.push('tabs/home/home-detail');
  }


}
