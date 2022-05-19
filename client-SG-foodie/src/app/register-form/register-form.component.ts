import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator, passwordValidator } from '../validators/check.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  public regForm: any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this._formBuilder.group({
        lastname: ['', [Validators.required, Validators.minLength(2), customValidator(/\@|\#|\$|\%|\^|\&/)]],
        firstname: ['', [Validators.required, Validators.minLength(2), customValidator(/\@|\#|\$|\%|\^|\&/)]],
        email: ['', Validators.email],
        phonenum: ['', [Validators.required, Validators.pattern("^((\\+84-?)|0)?[0-9]{10}$")]],
        pass: [''],
        confirmPass: ['']
      }, {validators: [passwordValidator]})
  }
  get lastname(){
    return this.regForm.controls['lastname']
  }
  get firstname(){
    return this.regForm.controls['firstname']
  }
  
  get phonenum(){
    return this.regForm.controls['phonenum']
  }
}
