import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../Car';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  car:Car=new Car();
message:any
  constructor(private service:ServiceService,private router : Router) { }

  ngOnInit(): void {
  }
  public Add(){
    let resp=this.service.AddCar(this.car);
    resp.subscribe((data:any)=>this.message=data);
  }

}
