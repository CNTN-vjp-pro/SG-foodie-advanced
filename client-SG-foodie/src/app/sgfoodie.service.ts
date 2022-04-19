import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import { Policy } from 'models/policy';
import { catchError, Observable, retry,throwError } from 'rxjs';
const baseUrl="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class SgfoodieService {
  constructor(private _http:HttpClient) { }
  getPolicy():Observable<Policy[]>{
	return this._http.get<Policy[]>(`${baseUrl}/policies`).pipe(
	  retry(2),
	  catchError(this.handleError)
	)
	}
	handleError(err:HttpErrorResponse){
		return throwError(()=>new Error(err.message));
	  }
}
