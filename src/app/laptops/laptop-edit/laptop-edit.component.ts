import { Laptop } from './../laptop.model';
import { LaptopService } from './../laptop.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-laptop-edit',
  templateUrl: './laptop-edit.component.html',
  styleUrls: ['./laptop-edit.component.css']
})
export class LaptopEditComponent implements OnInit {
  index: number;
  editMode = false;
  form: FormGroup
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private laptopService: LaptopService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }

  initForm() {
    let laptopId = '';
    let laptopName = '';
    let laptopPrice = 0;
    let laptopDescription = '';
    if(this.editMode) {
      const laptop = this.laptopService.getLaptop(this.index);
      laptopId = laptop.id;
      laptopName = laptop.name;
      laptopPrice = laptop.price;
      laptopDescription = laptop.description;
    }

    this.form = this.fb.group({
      id: [laptopId, [Validators.required]],
      name: [laptopName, [Validators.required]],
      price: [laptopPrice, [Validators.required, Validators.min(0)]],
      description: [laptopDescription, [Validators.required]]
    })
  }

  onSubmit() {
    if(this.editMode) {
      this.laptopService.updateLaptop(this.index, this.form.value);
    }
    else {
      this.laptopService.addLaptop(this.form.value)
    }
  }

  onCancel() {
    this.router.navigateByUrl('/laptops')
  }

  getConfig(ctrl: string) {
    return this.form.get(ctrl).invalid && this.form.get(ctrl).touched
  }

}
