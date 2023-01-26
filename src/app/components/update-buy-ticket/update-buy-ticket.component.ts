import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {BuyTicketService} from "../../services/buy-ticket.service";
import {BuyTicketClient} from "../../models/buyTicketClient.model";

@Component({
  selector: 'app-update-buy-ticket',
  templateUrl: './update-buy-ticket.component.html',
  styleUrls: ['./update-buy-ticket.component.css']
})
export class UpdateBuyTicketComponent implements OnInit{

  // @ts-ignore
  ticket:BuyTicketClient;
  // @ts-ignore
  updateTicketForm:FormGroup;
  param:any;

  // @ts-ignore
  clientId:number;
  constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute,private buyTicketService:BuyTicketService) {
  }
  ngOnInit(): void {
    this.createUpdateTicketForm()
    this.activatedRoute.params.subscribe(params=>{
      this.param=params//ticketId
      console.log(this.param)
    })

    // @ts-ignore
    this.clientId= +localStorage.getItem("clientId")
      }

  createUpdateTicketForm(){
    this.updateTicketForm = this.formBuilder.group({
      ticketaId:["",Validators.required],
      statue:["",Validators.required],
    })
  }

  updateTicket(){
    let updateTicket = Object.assign({},this.updateTicketForm.value)
    this.buyTicketService.updateStatue(this.param.ticketId,updateTicket.statue).subscribe(response=>{
      this.ticket=response;
    })
  }

}
