import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../models/booking';
import { FoodieService } from '../services/foodie.service';


@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {
public bookingForm:any;
	restaurant: any;  
	restaurants: any;
	errMsg: string = "";
	_id: any;
	booking:Booking= new Booking();
	constructor(private _service: FoodieService, private activatedRoute: ActivatedRoute, private router: Router,private _formBuilder:FormBuilder){}
	
	ngOnInit(): void {
  
	 this.activatedRoute.paramMap.subscribe(params => {
		this._id = params.get('id');
	  });
	  this.getRestaurantById(this._id);  
	  this.bookingForm = this._formBuilder.group({
		adultQuantity:['',[Validators.required]],
		childrenQuantity:[,[Validators.required]],
		bookingDate:['',[Validators.required]],
		name:['',[Validators.required]],
		email:['',[Validators.email,Validators.required]],
		phoneNumber:['',[Validators.required,Validators.pattern("[0-9_-]{10,12}")]],
		note:[''],
		policyAcceptance:['',[Validators.required]]
	  })
	}
	bookingSubmit(){
		console.log(this.bookingForm.value);
		 this._service.postBookingTable(this.bookingForm.value).subscribe(res=>{
		let resData=JSON.parse(JSON.stringify(res));
		console.log("success");
	})  
	
}
	getRestaurantById(_id: any){
	  this._service.getResById(_id).subscribe((res) => {
		this.restaurant = res;
	  })
	}
  }
  