import {Trip} from "./trip.model";
import {Client} from "./client.model";

export interface Buy_Ticket_Request{
  id:number;

  seatNumber:number;

  tripId:number;

  clientId:number;


}
