import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "../models/login.model";
import {LoginRequest} from "../models/loginRequest.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:8080/auth/';
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginRequest){
    return this.httpClient.post<Login>(this.apiUrl+"login",loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
