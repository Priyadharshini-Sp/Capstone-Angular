import { Component, OnInit } from '@angular/core';
import { Form } from '../form';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.css']
})
export class ViewformComponent implements OnInit {
  forms:any
  form:Form=new Form()
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    let resp=this.service.getforms();
    resp.subscribe((data:any)=>this.forms=data);
  }

}
