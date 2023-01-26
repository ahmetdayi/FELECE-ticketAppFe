import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @ts-ignore
  clientId:number;


  ngOnInit(): void {

  }
  constructor(private route:Router) {
  }

  isLogin() {
    if (localStorage.getItem("token")) {
      // @ts-ignore
      this.clientId= +localStorage.getItem("clientId")
      return true
    } else {
      return false
    }

  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("clientId")

    this.route.navigate(["/"])
  }


}
