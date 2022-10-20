import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';
import {FormBuilder,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
cars:any
car:Car=new Car()
formValue ! : FormGroup;

  constructor(private service:ServiceService,private formbuilber: FormBuilder) { }

  ngOnInit(): void {
    let resp=this.service.getcars();
    resp.subscribe((data:any)=>this.cars=data);

    this.formValue =this.formbuilber.group({
      carid: [''],
      carname : [''],
      desc:[''],
      price:[''],
      location: [''],
      off:[''],
      owner:['']
      })
  }
  public onEdit(car:any){
    this.car.carId = car.carId;
    this.formValue.controls['carname'].setValue(car.carname);
    this.formValue.controls['desc'].setValue(car.desc);
    this.formValue.controls['price'].setValue(car.price);
    this.formValue.controls['off'].setValue(car.offers);
    this.formValue.controls['location'].setValue(car.location);
    this.formValue.controls['owner'].setValue(car.owner);
  }
  public deleteCar(carId:string){
    let resp=this.service.deletecar(carId);
    resp.subscribe((data:any)=>this.cars=data);
  }
  public updateEmployeeDetails(){
    this.car.carName = this.formValue.value.carName;
    this.car.desc = this.formValue.value.desc;
    this.car.price = this.formValue.value.price;
    this.car.offers = this.formValue.value.offers;
    this.car.location= this.formValue.value.location;
    
  

}
}
