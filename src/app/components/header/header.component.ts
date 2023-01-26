import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @ts-ignore
  login:string;
  ngOnInit(): void {
  }
  constructor(private route:Router) {
  }

  isLogin() {
    if (localStorage.getItem("token")) {
      return true
    } else {
      return false
    }

  }

  logout() {
    localStorage.removeItem("token");

    this.route.navigate(["/"])
  }


}
