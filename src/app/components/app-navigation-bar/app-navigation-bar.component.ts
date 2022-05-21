import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-app-navigation-bar',
  templateUrl: './app-navigation-bar.component.html',
  styleUrls: ['./app-navigation-bar.component.css']
})
export class AppNavigationBarComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  isLoggedIn():boolean{
    return  localStorage.getItem('idToken') != undefined
  }

  routeLogin(){
    console.log(this.isLoggedIn())
    if(this.isLoggedIn()){
      localStorage.clear(); 
    }
    this.router.navigate(['/login']);
  }


}
