import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {TripComponent} from "./components/trip/trip.component";
import {CityComponent} from "./components/city/city.component";
import {BuyTicketComponent} from "./components/buy-ticket/buy-ticket.component";
import {LoginComponent} from "./components/login/login.component";
import {HeaderComponent} from "./components/header/header.component";


const routes: Routes = [
  {path:"",pathMatch:"full", component:TripComponent},
  {path:"trips", component:TripComponent},
  {path:"trips/route/starting_city/:starting_cityId/ending_city/:ending_cityId", component:TripComponent},
  {path:"trips/:year/:month/:day", component:TripComponent},
  {path:"trips/:tripId/buy_ticket", component:BuyTicketComponent},
  {path:"login", component:LoginComponent},
  {path:"logout", component:HeaderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
