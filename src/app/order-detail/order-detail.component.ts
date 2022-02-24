import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  id = 0;
  orderDetail = [
  [
    {id: 0, name: 'Sony', amount: 40000, units: 1400, pur_date : '2021-06-19T10:03:21.609Z'},
    {id: 1, name: 'Philips', amount: 30000, units: 1200, pur_date: '2021-06-19T10:03:21.609Z' },
    {id: 2, name: 'Bosch', amount: 60000, units: 1729, pur_date: '2021-06-19T10:03:21.609Z'}
  ],
  [
    {id: 0, name: 'Sony', amount: 12900, units: 1467, pur_date : '2021-04-09T10:03:21.609Z'},
    {id: 1, name: 'Philips', amount: 18256, units: 1289, pur_date: '2021-04-09T10:03:21.609Z' },
    {id: 2, name: 'Bosch', amount: 12498, units: 170, pur_date: '2021-04-09T10:03:21.609Z'}
  ],
  [
    {id: 0, name: 'Sony', amount: 8489, units: 3400, pur_date : '2021-05-29T10:03:21.609Z'},
    {id: 1, name: 'Philips', amount: 9769, units: 1267, pur_date: '2021-05-29T10:03:21.609Z' },
    {id: 2, name: 'Bosch', amount: 10400, units: 1799, pur_date: '2021-05-29T10:03:21.609Z'}
  ]
  ];
constructor(private route: ActivatedRoute) { }    

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  }

}
