import {Component, OnInit} from '@angular/core';
import {Trip} from "../../models/trip.model";
import {TripService} from "../../services/trip.service";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit{

  trips: Trip[] = []
  param:any={

  }

  constructor(private tripService: TripService,private activatedRoute:ActivatedRoute,private route:Router) {
  }
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.param=params

    })
    if(this.param.starting_cityId&&this.param.ending_cityId){
      this.getTripsByRoute(this.param.starting_cityId,this.param.ending_cityId)
    }
    else if(this.param.year&&this.param.month&&this.param.day){

      this.getTripsByDate(this.param.year,"0"+this.param.month,this.param.day)

    }

    else{
      this.getAllTrips()
    }

  }

   getAllTrips(){
    return this.tripService.getAllTrips().subscribe(response =>{
      this.trips = response
      }
    )
  }

  getTripsByDate(year:string,month:string,day:string){
    this.tripService.getTripsByDate(year, month, day).subscribe(response=>{
      this.trips=response;
    })
  }
  getTripsByRoute(startingPointCityId:number, endingPointCityId:number){
   return  this.tripService.getTripsByRoute(startingPointCityId,endingPointCityId).subscribe(response =>{
      this.trips=response;
         })
  }



}
