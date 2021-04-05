import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../models/payment';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url = "https://localhost:44388/api/Payments/";
  constructor(private http:HttpClient) { }

  add(payment:Payment):Observable<SingleResponseModel<Payment>>{
    return this.http.post<SingleResponseModel<Payment>>(this.url + "add",payment);
  }
}
