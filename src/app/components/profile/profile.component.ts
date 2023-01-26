import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Profile} from "../../models/profile.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  // @ts-ignore
  client:Profile;

  constructor(private clientService:ClientService,private route:Router) {
  }
  ngOnInit(): void {
    this.getById()
  }

  getById(){
    if(localStorage.getItem("clientId")){
      // @ts-ignore
      this.clientService.getById(+localStorage.getItem("clientId")).subscribe(response =>{
        this.client=response;
        console.log(this.client)
      })
    }

  }

}
