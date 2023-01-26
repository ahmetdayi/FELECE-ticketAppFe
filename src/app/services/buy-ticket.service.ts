import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Buy_Ticket} from "../models/buy_ticket.model";
import {Buy_Ticket_Request} from "../models/buy_ticket_request.model";

@Injectable({
  providedIn: 'root'
})
export class BuyTicketService {

  getApiUrl:string="http://localhost:8080/buy_ticket/take/"
  constructor(private httpClient: HttpClient) { }


  takeTicket(buyTicketRequest:Buy_Ticket_Request){
    return this.httpClient.post<Buy_Ticket>(this.getApiUrl,buyTicketRequest);
  }

  updateStatue(ticketId:number,statue:string){
    return this.httpClient.put("http://localhost:8080/buy_ticket/update_statue?id=" +
      ticketId+"&statue="+statue, {})
  }
}
