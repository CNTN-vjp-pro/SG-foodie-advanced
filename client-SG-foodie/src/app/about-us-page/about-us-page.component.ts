import { Component, OnInit } from '@angular/core';
import { FoodieService } from '../services/foodie.service';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css']
})
export class AboutUsPageComponent implements OnInit {

  aboutUs: any;
  errMessage: string = "";

  constructor(private _service: FoodieService) { }

  ngOnInit(): void {
    this._service.getAboutUs().subscribe({
      next: data => {
        console.log(data);
        this.aboutUs = data},
      error: err => this.errMessage = err
    })
  }

}
