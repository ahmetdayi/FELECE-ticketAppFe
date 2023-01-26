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
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { BuyTicketComponent } from './components/buy-ticket/buy-ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TripComponent,
    CityComponent,
    FilterComponent,
    BuyTicketComponent
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

//TODO boyle yaparak bır dropdownı calıstırabılıdm


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
