import { Component, OnInit } from '@angular/core';
import { Form } from '../form';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
form:Form=new Form();
message:any
  
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
  }
public Addinterest()
{
  let resp=this.service.form(this.form);
  resp.subscribe((data:any)=>this.message=data);
  this.router.navigate(["/viewform"]);
}}
