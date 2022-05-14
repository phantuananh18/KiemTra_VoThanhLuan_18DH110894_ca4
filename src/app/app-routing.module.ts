import { LaptopEditComponent } from './laptops/laptop-edit/laptop-edit.component';
import { LaptopDetailsComponent } from './laptops/laptop-details/laptop-details.component';
import { CustomersComponent } from './customers/customers.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/laptops',
    pathMatch: 'full'
  },
  {
    path: 'laptops',
    component: LaptopsComponent,
    children: [
      {
        path: '',
        component: LaptopDetailsComponent
      },
      {
        path: 'details/:id',
        component: LaptopDetailsComponent
      },
      {
        path: 'new',
        component: LaptopEditComponent
      },
      {
        path: 'edit/:id',
        component: LaptopEditComponent
      }
    ]
  },
  {
    path: 'customers',
    component: CustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
