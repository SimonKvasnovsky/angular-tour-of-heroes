import { Component, OnInit } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  item: Item = {
    id: 12,
    name: "Johan",
    price: 500 

  };

  constructor() { }

  ngOnInit(): void {
  }
  

}
