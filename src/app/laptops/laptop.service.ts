import { Laptop } from './laptop.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  private LaptopData: Laptop[] = [
    {
      id: 'LT001',
      name: 'ThinkPad X1 Carbon',
      price: 25000000,
      description: 'Laptop ultra book Lenovo ThinkPad'
    },
    {
      id: 'LT002',
      name: 'ThinkPad E570',
      price: 10000000,
      description: 'Laptop ultra book 15" Lenovo ThinkPad'
    },
    {
      id: 'LT003',
      name: 'Macbook Pro 2021 M1',
      price: 35000000,
      description: 'Laptop ultra book Apple Chipset M1'
    },
  ]
  constructor() { }

  get List() {
    return of<Laptop[]>(this.LaptopData)
  }

  getLaptop(index: number) {
    return this.LaptopData[index];
  }

  addLaptop(laptop: Laptop) {
    this.LaptopData.push(laptop);
  }

  updateLaptop(index: number, newLap: Laptop) {
    this.LaptopData[index] = newLap;
  }

  deleteLaptop(index: number) {
    this.LaptopData.splice(index,1)
  }
}
