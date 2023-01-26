import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {TripComponent} from "./components/trip/trip.component";
import {CityComponent} from "./components/city/city.component";


const routes: Routes = [
  {path:"",pathMatch:"full", component:TripComponent},
  {path:"trips", component:TripComponent},
  {path:"trips/route/starting_city/:starting_cityId/ending_city/:ending_cityId", component:TripComponent},
  {path:"trips/:year/:month/:day", component:TripComponent},
  {path:"trips/:year/:month/:day", component:TripComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
