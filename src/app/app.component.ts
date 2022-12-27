import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
submituser() {
throw new Error('Method not implemented.');
}
  title = 'pokemon';

  constructor(private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  Submit(pageName:string):void{
  this.router.navigate([`${pageName}`]);
  }
}
