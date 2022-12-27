import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pok } from './pok';

@Injectable({
  providedIn: 'root'
})
export class PoserviceService {

  private getpokurl:string;
 private posturl:string;
    constructor(private http:HttpClient) {
    this.getpokurl='http://localhost:8989/getpokemondetails';
    this.posturl='http://localhost:9092/postuserdata';
   }

    findAll():Observable<Pok[]>{
   return this.http.get<Pok[]>(this.getpokurl);

   }
   saveuser(pok:Pok){
    console.log(pok.id+"-"+pok.name+"-"+pok.power+"-"+pok.species+"-"+pok.attack+"-"+pok.defense+"-"+pok.speed);
    return this.http.post<Pok>(this.posturl,Pok)
   }
}
