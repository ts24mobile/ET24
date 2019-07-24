import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeTicketInfoPage } from './home-ticket-info.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTicketInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeTicketInfoPage]
})
export class HomeTicketInfoPageModule {}
