import {City} from "./city.model";

export interface Route{
  id:number
  startingPoint: City
  endingPoint: City
}
