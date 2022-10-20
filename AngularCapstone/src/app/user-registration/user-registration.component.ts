import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service'
import {User} from "../User"
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  
  user:User=new User();
message:any
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }
  public register(){
    let resp=this.service.Registration(this.user);
    resp.subscribe((data:any)=>this.message=data);
  }

}
