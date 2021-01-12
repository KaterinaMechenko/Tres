import { Component, OnInit } from '@angular/core';

export interface PriceList {
  name: string;
  units: number;
  unitName: string;
  price: number;
}

// mock data
const PRICE_DATA: PriceList[] = [
  { name: 'торт', units: 1, unitName: 'кг', price: 100},
  { name: 'капкейки', units: 6, unitName: 'шт.', price: 100},
  { name: 'капкейки', units: 9, unitName: 'шт.', price: 100},
  { name: 'капкейки', units: 12, unitName: 'шт.', price: 100},
  { name: 'Анна Павлова', units: 6, unitName: 'шт.', price: 100},
  { name: 'Анна Павлова', units: 9, unitName: 'шт.', price: 100},
  { name: 'Анна Павлова', units: 12, unitName: 'шт.', price: 100},
  { name: 'трайфлы', units: 6, unitName: 'шт.', price: 100 },
  { name: 'трайфлы', units: 9, unitName: 'шт.', price: 100 }
];

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['name', 'units', 'price'];
  dataSource = PRICE_DATA;

  ngOnInit(): void {
  }

  getCakeUnit(cake: PriceList): string {
    return cake.units + ' ' + cake.unitName; // 1 кг
  }

}
