import { Component, OnInit } from '@angular/core';
import { Policy } from 'models/policy';
import { SgfoodieService } from '../sgfoodie.service';
@Component({
  selector: 'app-security-policy-page',
  templateUrl: './security-policy-page.component.html',
  styleUrls: ['./security-policy-page.component.css']
})
export class SecurityPolicyPageComponent implements OnInit {
  constructor(private _service: SgfoodieService) { }
  policies:any;
  errMessage:string="";
  policy:Policy=new Policy();
  data:any;
  ngOnInit(): void {
	this._service.getPolicy().subscribe({
		next:data=>{
			console.log(data);
			this.policies=data},
			error:err=>this.errMessage = err
		})
  } 
}
