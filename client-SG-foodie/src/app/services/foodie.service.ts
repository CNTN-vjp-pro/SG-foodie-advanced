import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AboutUs } from 'interfaces/aboutUs';
import { IRestaurant } from 'interfaces/restaurants';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Booking } from '../models/booking';
import { Policy } from '../models/policy';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class FoodieService {

  rest_API_URL = "http://localhost:3000/"

  constructor(private _http: HttpClient) { }

  getRestaurantsList(): Observable<IRestaurant[]> {
    let API_URL = `${this.rest_API_URL}restaurants`;
    return this._http.get<IRestaurant[]>(API_URL)
    .pipe(
      retry(3),
      catchError(this.errorHandler)
    )
  }

  getResById(_id:any): Observable<IRestaurant[]>{
    return this._http.get<IRestaurant[]>(`${this.rest_API_URL}restaurant/${_id}`);
  }

  getRestaurantsListByCategory(category:any){
	return this._http.get<IRestaurant[]>(`${this.rest_API_URL}restaurants/${category}`);
  }
  errorHandler(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message))
  }

  postRestaurant(data: any){
    return this._http.post(`${this.rest_API_URL}restaurant`, data)
  }

  updateRestaurant(id: any, data: any){
    return this._http.patch(`${this.rest_API_URL}restaurant/${id}`, data)
  }

  deleteRestaurant(id: any){
    return this._http.delete(`${this.rest_API_URL}restaurant/${id}`, id)
  }
  getPolicy():Observable<Policy[]>{
	return this._http.get<Policy[]>(`${this.rest_API_URL}policies`).pipe(
	  retry(2),
	  catchError(this.errorHandler)
	)
	}
	//Booking
	postBookingTable(data: Booking){
		return this._http.post(`${this.rest_API_URL}bookingTable`,data);
	  }
	getBookingTable():Observable<Booking[]>{
		return this._http.get<Booking[]>(`${this.rest_API_URL}bookingTable/appointment`).pipe(
		  retry(2),
		  catchError(this.errorHandler)
		)
		}
	deleteBookingTable(id: any){
			return this._http.delete(`${this.rest_API_URL}bookingTable/${id}`, id)
		  }
  getAboutUs():Observable<AboutUs[]>{
    return this._http.get<AboutUs[]>(`${this.rest_API_URL}aboutus`).pipe(
      retry(2),
      catchError(this.errorHandler)
    )
  }
}
