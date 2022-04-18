import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRestaurant } from 'interfaces/restaurants';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class FoodieService {

  rest_API_URL = "http://localhost:3000/"

  constructor(private _http: HttpClient) { }

  getRestaurantsList(): Observable<IRestaurant[]> {
    let API_URL = `${this.rest_API_URL}restaurants`
    return this._http.get<IRestaurant[]>(API_URL)
    .pipe(
      retry(3),
      catchError(this.errorHandler)
    )
  }
  errorHandler(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message))
  }

  postRestaurant(data: Restaurant){
    let API_URL = `${this.rest_API_URL}restaurant`;
    return this._http.post(API_URL, JSON.stringify(data))
  }

  updateRestaurant(id: any, data: any){
    return this._http.patch(`${this.rest_API_URL}restaurants/${id}`, id, data)
  }

  deleteRestaurant(id: any){
    return this._http.delete(`${this.rest_API_URL}restaurants/${id}`, id)
  }
}
