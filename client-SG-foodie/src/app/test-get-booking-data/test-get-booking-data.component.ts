import { Component, OnInit } from '@angular/core';
import { FoodieService } from '../services/foodie.service';
@Component({
  selector: 'app-test-get-booking-data',
  templateUrl: './test-get-booking-data.component.html',
  styleUrls: ['./test-get-booking-data.component.css']
})
export class TestGetBookingDataComponent implements OnInit {

  constructor(private _service: FoodieService) { }
booking:any;
errMsg :any;
localNow:any;
  ngOnInit(): void {
		this._service.getBookingTable().subscribe({
		  next: data => this.booking = data,
		  error: err => this.errMsg = err,
		})
		function convertUTCDateToLocalDate(date:any) {
			var newDate = new Date(date.getTime() - date.getTimezoneOffset()*60*1000);
			return newDate;   
		}
	  }
	 
	}


