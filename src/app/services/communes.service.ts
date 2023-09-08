import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunesService {

  constructor(private http: HttpClient) { }

  getCommunes(): Observable<Object> {
    return this.http.get('http://localhost:8080/api/address/communes/')
  }
}
