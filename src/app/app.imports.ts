import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NavControllerService } from './services';

export const MODULES = [
    BrowserModule,
    HttpClientModule,
    NgxQRCodeModule,
    IonicModule.forRoot(),
];


export const PROVIDERS = [

    NavControllerService,
    // Ionic native specific providers
    StatusBar,
    SplashScreen,
    BarcodeScanner

];