import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  url = "https://localhost:44388/api/Colors/getall";
  constructor(private http:HttpClient) { }

  getAll():Observable<ListResponseModel<Color>>{
    return this.http.get<ListResponseModel<Color>>(this.url);
  }
}
