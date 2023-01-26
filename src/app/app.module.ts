import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TripComponent } from './components/trip/trip.component';
import {HttpClientModule} from "@angular/common/http";
import { CityComponent } from './components/city/city.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu} from "@ng-bootstrap/ng-bootstrap";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterComponent } from './components/filter/filter.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { BuyTicketComponent } from './components/buy-ticket/buy-ticket.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';
import { UpdateBuyTicketComponent } from './components/update-buy-ticket/update-buy-ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TripComponent,
    CityComponent,
    FilterComponent,
    BuyTicketComponent,
    LoginComponent,
    ProfileComponent,
    ProfileUpdateComponent,
    UpdateBuyTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbDropdownItem,
    NgbDropdownMenu,
    NgbDropdown,
    NgbModule,
    FormsModule,
    RouterOutlet,
    ReactiveFormsModule,

//TODO boyle yaparak bır dropdownı calıstırabılıdm


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
