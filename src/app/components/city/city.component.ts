import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {City} from "../../models/city.model";
import {CityService} from "../../services/city.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit{
    cities: City[] = []
   currentStartingPointCity: City ={
      id:0,
      name:"Starting Point"
    };
    currentEndingPointCity: City ={
      id:0,
      name:"Ending Point"
    };

  constructor(private cityService: CityService,private route:Router) {
  }
  ngOnInit(): void {
      this.getAllCities()

  }
  setCurrentStartingPointCity(startingPoint:City){
    this.currentStartingPointCity = startingPoint;

  }

  setCurrentEndingPointCity(endingPoint:City){
    this.currentEndingPointCity = endingPoint;

  }
  getAllCities(){
    return this.cityService.getAllCities().subscribe(response =>{
        this.cities = response
      }
    )
  }
  goPath(){
    this.route.navigate(["/trips"])

  }

  getCurrentStartingPoint(startingPoint:City){
    if(startingPoint ==this.currentStartingPointCity){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getCurrentEndingPoint(endingPoint:City){
    if(endingPoint ==this.currentEndingPointCity){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }


}
