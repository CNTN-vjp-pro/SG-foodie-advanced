import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Restaurant } from '../models/restaurant';
import { FoodieService } from '../services/foodie.service';


@Component({
  selector: 'app-admin-edit-restaurant-page',
  templateUrl: './admin-edit-restaurant-page.component.html',
  styleUrls: ['./admin-edit-restaurant-page.component.css']
})

export class AdminEditRestaurantPageComponent implements OnInit {

  restaurant: any;  
  restaurants: any;
  errMsg: string = "";
  _id: any;
  file: any = null;
  title: string = "";
  categories: string[] = ["Nổi bật", "Ưu đãi", "Văn hóa ẩm thực", "Tinh hoa Việt Nam", "Điểm nhấn quận mình", "Kiểu Nhật", "Kiểu Trung", "Kiểu Âu", "Kiểu Hàn"];
  errFlag = false;

  public restaurantForm = this._formBuilder.group({
    _id: [""],
    name: ["", Validators.required],
    short_description: ["", Validators.required],
    description: [[], Validators.required],
    // image: [[], Validators.required],
    // file: ["", Validators.required],
    menu: [[], Validators.required],
    best_dishes: [[], Validators.required],
    link: ["", Validators.required],
    category: [[], Validators.required],
    address: [[], Validators.required],
    map: ["", Validators.required],
    time: ["", Validators.required],
    price_range: ["", Validators.required],
    special_diet: [[]],
    discount: ["", Validators.required],
    cmt: [[], Validators.required]
  })


  constructor(
    private _service: FoodieService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private _toast: ToastrService,
    private _formBuilder: FormBuilder
    ){}
  
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      
      this._id = params.get('id');
      console.log(this._id);
      this.getRestaurantById(this._id);
    });
  }

  getRestaurantById(_id: any){
    if( _id == 0){
      this.restaurant = new Restaurant();
      this.title = "Thêm nhà hàng mới"
    }
    else{
      this._service.getResById(_id).subscribe((res) => {
        this.restaurant = res;
        this.restaurantForm.patchValue({
          _id: res._id,
          name: res.name,
          short_description: res.short_description,
          description: res.description,
          image: res.image,
          file: res.image,
          menu: res.menu,
          best_dishes: res.best_dishes,
          link: res.link,
          category: res.category,
          address: res.address,
          map: res.map,
          time: res.time,
          price_range: res.price_range,
          special_diet: res.special_diet,
          discount: res.discount,
          cmt: res.cmt
        })
      }) 
      this.title = "Chỉnh sửa nhà hàng"
    }
  }
  getRestaurant(){
    this._service.getRestaurantsList().subscribe({
      next: data => this.restaurants = data,
      error: err => this.errMsg = err
    })
  } 

  onChange(event: any){
    if(event.target.files.length > 0){
      this.file = event.target.files[0]
      console.log("file", this.file)
    }
    else{
      this.restaurant.image = null;
    }
  }


  submitData(data: any) {
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("short_description", data.short_description);
    formData.append("description", data.description);
    formData.append("file", this.file);
    formData.append("menu", data.menu);
    formData.append("best_dishes", data.best_dishes);
    formData.append("link", data.link);
    formData.append("category", data.category);
    formData.append("address", data.address);
    formData.append("map", data.map);
    formData.append("time", data.time);
    formData.append("price_range", data.price_range);
    formData.append("special_diet", data.special_diet);
    formData.append("discount", data.discount);
    formData.append("cmt", data.cmt);

    if(this.restaurantForm.get('_id')?.value==""){
      this._service.postRestaurant(formData).subscribe(res=>{
        let resData=JSON.parse(JSON.stringify(res));
        if(resData.message==="success"){
          this._toast.success("Insert successfully!", "Insert")
          this.getRestaurant();
          this.onReset();
          console.log(data)
        }else{
          alert("Fail!");
        }
      }) 
    }else{
      this._service.updateRestaurant(this.restaurantForm.get('_id')?.value,this.restaurantForm.value).subscribe(res=>{
        let resData=JSON.parse(JSON.stringify(res));
        if(resData.message==="success"){
          this._toast.info("Updated successfully!", "Update")
          this.getRestaurant();
          this.onReset();
        }else{
          alert("Fail!");
        }
      });
    }
  }
  onReset(form?: NgForm){
    if(form)
      form.reset();
    this.restaurantForm = this._formBuilder.group({
      _id: [""],
      name: [""],
      short_description: [""],
      description: [[]],
      // image: [[]],
      // file: [""],
      menu: [[]],
      best_dishes: [[]],
      link: [""],
      category: [[]],
      address: [[]],
      map: [""],
      time: [""],
      price_range: [""],
      special_diet: [[]],
      discount: [""],
      cmt: [[]]
    })
  }
  
  validateCategories(value: any){
    if (value == 'none'){
      this.errFlag = true;
    }else{
      this.errFlag = false;
    }
  }
}
