import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { customValidator, passwordValidator } from '../validators/check.validator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css',
              '../../assets/additional-style/root.css']
})
export class LoginPageComponent implements OnInit {

  public regForm: any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this._formBuilder.group({
        phonenum: ['', [Validators.required, Validators.pattern("^((\\+84-?)|0)?[0-9]{10}$")]],
        pass: [''],
      }, {validators: [passwordValidator]})
  }

  get phonenum(){
    return this.regForm.controls['phonenum'];
  }

}
