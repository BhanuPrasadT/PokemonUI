import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users: User[]=[];

  constructor(private userserv:UserService,private router:Router) { }

  // ngOnInit():void {
    
  //   this.userserv.findall().subscribe(data => {
  //     this.users = data;
  //     this.router.navigateByUrl('home');
  //   });
  }

