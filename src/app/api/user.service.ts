import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getCountryReport():any{
    return this.http.get('https://corona.lmao.ninja/v2/countries?yesterday&sort');  
  } 
  
  getIndiaReport():any{
    return this.http.get('https://corona.lmao.ninja/v2/countries/India?yesterday=true&strict=true&query%20=');
  }

}
