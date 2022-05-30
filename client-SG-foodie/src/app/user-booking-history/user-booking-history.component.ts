import { Component, OnInit } from '@angular/core';
import { FoodieService } from '../services/foodie.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-booking-history',
  templateUrl: './user-booking-history.component.html',
  styleUrls: ['./user-booking-history.component.css']
})
export class UserBookingHistoryComponent implements OnInit {

  constructor(private _service: FoodieService,private _toast:ToastrService) { }
  booking:any;
  errMsg :any;
  localNow:any;
  ngOnInit(): void {
	  this.getBooking();
	/* this._service.getBookingTable().subscribe({
		next: data => this.booking = data,
		error: err => this.errMsg = err,
	  }) */
  }
  deleteBooking(id:any){
	  if(confirm("Are you sure you want to delete this product?")==true){
		this._service.deleteBookingTable(id).subscribe(res=>{
			let resData=JSON.parse(JSON.stringify(res));
			if(resData.message==='success'){
				this._toast.warning("Deleted successfully!","Delete",{
					timeOut:5000,
					progressBar:false
				});
				this.getBooking();
			}else
			{
				alert("resData.message");
			}
		})
	}
  }
  getBooking(){
	this._service.getBookingTable().subscribe({
		next: data => this.booking = data,
		error: err => this.errMsg = err,
	  })
  }
}
