import { Component, OnInit } from '@angular/core';
import { FoodieService } from '../services/foodie.service';

@Component({
  selector: 'app-user-booking-history',
  templateUrl: './user-booking-history.component.html',
  styleUrls: ['./user-booking-history.component.css']
})
export class UserBookingHistoryComponent implements OnInit {

  constructor(private _service: FoodieService) { }
  booking:any;
  errMsg :any;
  localNow:any;
  ngOnInit(): void {
	this._service.getBookingTable().subscribe({
		next: data => this.booking = data,
		error: err => this.errMsg = err,
	  })
  }

}
