import { Injectable } from '@angular/core';
import {ApiI} from '../../interface/Api.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(  private http:HttpClient ) { }

  getAllApi(){
    return this.http
    .get<ApiI[]>('../../../assets/Api.json');
    
  }

 
}
