import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service'
import {Admin} from "../Admin"
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin:Admin=new Admin();
message:any
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }
  public doLogin(){
    let resp=this.service.login(this.admin);
    resp.subscribe((data:any)=>(this.message=data));
  }

}
