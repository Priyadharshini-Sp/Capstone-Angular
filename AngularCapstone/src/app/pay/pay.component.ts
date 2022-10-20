import { Component, OnInit } from '@angular/core';
import { Order } from './Order';
Order
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
order:Order=new Order()
  constructor() { }

  ngOnInit(): void {
  }

}
