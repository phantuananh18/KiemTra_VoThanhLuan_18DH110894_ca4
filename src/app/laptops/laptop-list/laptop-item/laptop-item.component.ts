import { Component, Input, OnInit } from '@angular/core';
import { Laptop } from '../../laptop.model';

@Component({
  selector: 'app-laptop-item',
  templateUrl: './laptop-item.component.html',
  styleUrls: ['./laptop-item.component.css']
})
export class LaptopItemComponent implements OnInit {
  @Input() index:number;
  @Input() laptop: Laptop;
  constructor() { }

  ngOnInit(): void {
  }

}
