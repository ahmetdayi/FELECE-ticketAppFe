import {BuyTicketComponent} from "../components/buy-ticket/buy-ticket.component";
import {Buy_Ticket} from "./buy_ticket.model";
import {BuyTicketClient} from "./buyTicketClient.model";

export interface Profile{
  id:number;

  firstName:string;

  lastName:string;

  gender:string;

  email:string;

  buyTicket:BuyTicketClient[]


}
