import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pok } from '../pok';
import { PoserviceService } from '../poservice.service';
// import { UserService } from '../userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  poks: Pok[]=[];
  

  constructor(private pokserv:PoserviceService) { }

  ngOnInit():void {
    
    this.pokserv.findAll().subscribe(data => {
      this.poks=data;
      
    });
  }
}
