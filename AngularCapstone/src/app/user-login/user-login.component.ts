import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service'
import {User} from "../User"
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:User=new User();
  message:any
    constructor(private service:ServiceService) { }
  
    ngOnInit(): void {
    }
    public Login(){
      let resp=this.service.dologin(this.user);
      resp.subscribe((data:any)=>(this.message=data));
    }
  

}
