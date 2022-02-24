import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orderList = [
    {id: 0, name: 'Refrigerator'},
    {id: 1, name: 'Microwave oven'},
    {id: 2, name: 'Pizza Maker'}
   ];
  constructor() { }

  ngOnInit(): void {
  }

}
