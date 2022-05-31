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
  }
  deleteBooking(id:any){
	  if(confirm("Bạn chắc chắn muốn hủy đặt bàn tại nhà hàng này?")==true){
		this._service.deleteBookingTable(id).subscribe(res=>{
			let resData=JSON.parse(JSON.stringify(res));
			if(resData.message==='success'){
				this._toast.success("Hủy đặt bàn thành công!","Hủy đặt bàn");
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
