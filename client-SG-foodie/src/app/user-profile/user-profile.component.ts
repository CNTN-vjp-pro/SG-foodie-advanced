import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { customValidator, passwordValidator } from '../validators/check.validator';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userForm: any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      lastname: ['', [Validators.required, Validators.minLength(2), customValidator(/\@|\#|\$|\%|\^|\&/)]],
      firstname: ['', [Validators.required, Validators.minLength(2), customValidator(/\@|\#|\$|\%|\^|\&/)]],
      email: ['', Validators.email],
      phonenum: ['', [Validators.required, Validators.pattern("^((\\+84-?)|0)?[0-9]{10}$")]],
      pass: [''],
      confirmPass: ['']
    }, {validators: [passwordValidator]})
}
get lastname(){
  return this.userForm.controls['lastname']
}
get firstname(){
  return this.userForm.controls['firstname']
}

get phonenum(){
  return this.userForm.controls['phonenum']
}

}

