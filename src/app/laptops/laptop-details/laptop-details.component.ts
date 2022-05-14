import { ActivatedRoute, Router } from '@angular/router';
import { LaptopService } from './../laptop.service';
import { Laptop } from './../laptop.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {
  laptop: Laptop;
  index: number
  constructor(
    private laptopService: LaptopService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.index = +params['id'];
      this.laptop = this.laptopService.getLaptop(this.index);
    })
  }

  onEdit() {
    this.router.navigateByUrl('/laptops/edit/' + this.index)
  }

  onDelete() {
    this.laptopService.deleteLaptop(this.index);
    this.router.navigateByUrl('/laptops')
  }
}
