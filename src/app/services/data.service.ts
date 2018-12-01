import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string;
  constructor(private _http: HttpClient) {
    this.baseUrl = 'http://jsonplaceholder.typicode.com/users';
  }

  getData(): Observable<User[]>{
    return this._http.get<User[]>(this.baseUrl);
  }

}
