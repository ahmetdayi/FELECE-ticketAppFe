import {Component, OnInit} from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {City} from "../../models/city.model";
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";
import {TripService} from "../../services/trip.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  model: NgbDateStruct = {
    day: 0,
    month: 0,
    year: 0
  };
  startingCityId: number = 0;
  endingCityId: number = 0;

  constructor(private route: Router, private tripService: TripService) {
  }

  ngOnInit(): void {

  }

  setDate(date: NgbDateStruct) {
    this.model = date;

  }

  goPath(){
    this.route.navigate(["/trips"])

  }



}
