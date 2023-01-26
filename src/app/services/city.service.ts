import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Trip} from "../models/trip.model";
import {City} from "../models/city.model";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  getApiUrl="http://localhost:8080/city/get_all_city"

  constructor(private httpClient: HttpClient) { }

  getAllCities(){
    return this.httpClient.get<City[]>(this.getApiUrl);
  }
}
