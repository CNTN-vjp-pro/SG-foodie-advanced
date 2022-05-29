import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
        username: ['Thùy Dương', [Validators.required, Validators.minLength(3), customValidator(/\@|\#|\$|\%|\^|\&/)]],
        email: ['example@gmail.com', Validators.email],
        pass: [''],
        confirmPass: ['']
      }, {validators: [passwordValidator]})
  }

}
