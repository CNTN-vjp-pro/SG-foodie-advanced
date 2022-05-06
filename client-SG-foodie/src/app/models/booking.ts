export class Booking{
	adultQuantity: Number;
	childrenQuantity: Number;
	bookingDate: Date;
	bookingTime: Date;
	name: String;
	email:String;
	note: String;
	constructor(){
		this.adultQuantity=new Number();
		this.childrenQuantity=new Number();
		this.bookingDate=new Date();
		this.bookingTime=new Date();
		this.name="";
		this.email="";
		this.note="";
	}
}
