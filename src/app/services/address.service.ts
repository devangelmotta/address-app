import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAddresses(): Observable<Object> {
    return this.http.get('http://localhost:8080/api/address/')
  }

  getAddressesById(id: string): Observable<Object> {
    return this.http.get(`http://localhost:8080/api/address/${id}`)
  }

  createAddress(body: object): Observable<Object> {
    return this.http.post(`http://localhost:8080/api/address/`, body)
  }

}
