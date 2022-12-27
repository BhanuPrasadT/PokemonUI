import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../userservice.service';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent {

user:User;

constructor(private userserv:UserService){
  this.user=new User();
}
insertusers(){
  console.log("user in ts",this.user);
  this.userserv.saveuser(this.user).subscribe(result=>{
    console.log(result);
  });
}

}
