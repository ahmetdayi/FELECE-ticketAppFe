import {Vehicle} from "./vehicle.model";
import {Route} from "./route.model";

export interface Trip{
  id:number
  price:number
  departureTime:Date
  vehicle:Vehicle
  route:Route
}
