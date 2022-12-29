import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{ HttpClientModule} from'@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigupComponent } from './Signup/sigup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PoserviceService } from './poservice.service';
import { ZubatComponent } from './zubat/zubat.component';
import { GolbatComponent } from './golbat/golbat.component';

@NgModule({
  declarations: [
    AppComponent,
    SigupComponent,
    LoginComponent,
    HomeComponent,
    ZubatComponent,
    GolbatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
