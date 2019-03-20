import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor() {
    this.items = [
      {id: 1, title: 'Bracelet', photo: '../../assets/baselet.jpg', price: 220},
      {id: 2, title: 'Bic Razor', photo: '../../assets/bic.jpg', price: 100},
      {id: 5, title: 'Nivea Face Wash', photo: '../../assets/nivea.jpg', price: 250},
      {id: 3, title: 'Elegance Hair Gel', photo: '../../assets/hairgel.png', price: 300},
      {id: 4, title: 'Lipstic', photo: '../../assets/lipstic.jpg', price: 210},
      {id: 6, title: 'rubik\'s cube', photo: '../../assets/rubric.jpg', price: 540},
      {id: 7, title: 'Shampoo', photo: '../../assets/shampoo.jpg', price: 220},
      {id: 8, title: 'Shaving Cream', photo: '../../assets/shaving.jpg', price: 340},
      {id: 9, title: 'Watch', photo: '../../assets/watch.jpg', price: 1000},
    ];
  }

  ngOnInit() {
  }

}
