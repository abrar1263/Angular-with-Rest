import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  

  public projectName:String ="Spring Boot" ;
  public currentURL =""
  constructor() {
    this.currentURL = window.location.href;
    console.log(this.currentURL);
    
   }
    public options = ['Spring Boot','Spring Security'];

  displayTitle(title: String) {
      //get distance
      //console.log(title);
      this.projectName = title;
      
   }
  

  ngOnInit(): void {

  }

}
