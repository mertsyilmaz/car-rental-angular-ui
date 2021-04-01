import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  url = "https://localhost:44388/api/Colors/getall";
  constructor(private http:HttpClient) { }

  getAll():Observable<ColorResponseModel>{
    return this.http.get<ColorResponseModel>(this.url);
  }
}
