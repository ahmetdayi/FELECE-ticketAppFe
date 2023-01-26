import {Trip} from "./trip.model";
import {Client} from "./client.model";

export interface BuyTicketClient{
  id:number;

  seatNumber:number;

  trip:Trip;

  statue:string;
}
