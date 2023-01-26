import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Trip} from "../models/trip.model";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  getApiUrl="http://localhost:8080/trip/get_all"
  getApiUrl1=''

  constructor(private httpClient: HttpClient) { }

  getAllTrips(){
    return this.httpClient.get<Trip[]>(this.getApiUrl);
  }

  getTripsByRouteAndDate(startingPointCityId:number, endingPointCityId:number, date:NgbDateStruct){
    return this.httpClient.get<Trip[]>("http://localhost:8080/trip/get_by_starting_point_id/" +startingPointCityId+
      "/ending_point_id/" +endingPointCityId+
      "/departure_time?dateTime=" +
      date.year+"-"+date.month+"-"+date.day);
  }

  getTripsByRoute(startingPointId:number,endingPointId:number){
    return this.httpClient.get<Trip[]>("http://localhost:8080/trip/get_by_route/"+startingPointId+"/"+endingPointId);
  }

  getTripsByDate(year:string,month:string,day:string){
    return this.httpClient.get<Trip[]>("http://localhost:8080/trip/get_by_departure_time?dateTime="+year+"-"+month+"-"+day)
  }
}
