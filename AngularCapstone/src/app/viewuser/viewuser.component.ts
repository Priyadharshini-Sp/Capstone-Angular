import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../service.service';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  users:any
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    let resp=this.service.getusers();
    resp.subscribe((data:any)=>this.users=data);
  }
  public Edit(){

  }
  public delete(userid:string){
    let resp=this.service.deleteuser(userid);
    resp.subscribe((data:any)=>this.users=data);
  }

}
