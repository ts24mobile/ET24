import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'home-detail', loadChildren: './pages/home/home-detail/home-detail.module#HomeDetailPageModule' },
  { path: 'home-ticket-info', loadChildren: './pages/home/home-ticket-info/home-ticket-info.module#HomeTicketInfoPageModule' },
  { path: 'home-ticket-booking-form', loadChildren: './pages/home/home-ticket-booking-form/home-ticket-booking-form.module#HomeTicketBookingFormPageModule' },
  { path: 'home-ticket-payment', loadChildren: './pages/home/home-ticket-payment/home-ticket-payment.module#HomeTicketPaymentPageModule' },
  { path: 'booking-detail', loadChildren: './pages/booking/booking-detail/booking-detail.module#BookingDetailPageModule' },
  // { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  // { path: 'booking', loadChildren: './pages/booking/booking.module#BookingPageModule' },
  // { path: 'user', loadChildren: './pages/user/user.module#UserPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
