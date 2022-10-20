import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import {ServiceService} from '../service.service'


@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
admin:Admin=new Admin();
message:any
  constructor(private service:ServiceService,private router : Router) { }

  ngOnInit(): void {
  }
  public doregister(){
    let resp=this.service.doRegistration(this.admin);
    resp.subscribe((data:any)=>this.message=data);
    
  }
  
}
