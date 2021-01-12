import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
import {Component} from '@angular/core';

export interface Price List {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Price List[] = [
  { name: 'торт', weight: 1 кг, cost: '100'},
  { name: 'капкейки', weight: 6 штук, cost: '100'},
  { name: 'капкейки', weight: 9 штук, cost: '100'},
  { name: 'капкейки', weight: 12 штук, cost: '100'},
  { name: 'Анна Павлова', weight: 6 штук, cost: '100'},
  { name: 'Анна Павлова', weight: 9 штук, cost: '100'},
  { name: 'Анна Павлова', weight: 12 штук, symbol: '100'},
  { name: 'трайфлы', weight: 6 штук, symbol: '100'},
  { name: 'трайфлы', weight: 9 штук, symbol: '100'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}