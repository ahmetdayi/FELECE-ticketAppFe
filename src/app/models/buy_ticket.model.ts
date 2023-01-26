import {Trip} from "./trip.model";
import {Client} from "./client.model";

export interface Buy_Ticket{
  id:number;

  seatNumber:number;

  trip:Trip;

  client:Client;

  statue:string;
}
