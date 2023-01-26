import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {BuyTicketService} from "../../services/buy-ticket.service";
import {Buy_Ticket} from "../../models/buy_ticket.model";

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit{


  // @ts-ignore
  buyTicketResponse:Buy_Ticket;
  // @ts-ignore
  buyTicketForm:FormGroup;

  param:any;

  constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute,private buyTicketService:BuyTicketService) {
  }
  ngOnInit(): void {
    this.createBuyTicketForm()
    this.activatedRoute.params.subscribe(params=>{
      this.param=params//tripId
    })


  }

  createBuyTicketForm(){
    this.buyTicketForm = this.formBuilder.group({
      seatNumber:["",Validators.required],
      tripId: ["",Validators.required],
      clientId:["", Validators.required],
    })
  }

  takeTicket(){
    let buyTicketModel = Object.assign({},this.buyTicketForm.value)
    buyTicketModel.tripId=this.param.tripId;

    this.buyTicketService.takeTicket(buyTicketModel).subscribe(params=>{
      this.buyTicketResponse=params
      console.log(this.buyTicketResponse)
    })
  }




}
