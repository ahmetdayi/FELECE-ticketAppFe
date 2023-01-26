import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "../models/client.model";
import {Profile} from "../models/profile.model";
import {UpdateClient} from "../models/updateClient.model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  getApiUrl="http://localhost:8080/client/user_me/"
  updateUrl="http://localhost:8080/client/update/"
  constructor(private httpClient: HttpClient) { }

  getById(clientId:number){
    return this.httpClient.get<Profile>(this.getApiUrl +clientId);
  }

  update(updateClient:UpdateClient){
    return this.httpClient.put<Profile>(this.updateUrl,updateClient)
  }
}
