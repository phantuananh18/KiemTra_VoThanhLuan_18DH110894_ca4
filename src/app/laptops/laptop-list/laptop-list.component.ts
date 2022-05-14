import { LaptopService } from './../laptop.service';
import { Laptop } from './../laptop.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  laptops: Laptop[];

  constructor(
    private laptopService: LaptopService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.laptopService.List.subscribe(src => {
      this.laptops = src
    })
  }

  onNewLaptop() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
