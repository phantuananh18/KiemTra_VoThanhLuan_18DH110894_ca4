import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { CustomersComponent } from './customers/customers.component';
import { LaptopListComponent } from './laptops/laptop-list/laptop-list.component';
import { LaptopEditComponent } from './laptops/laptop-edit/laptop-edit.component';
import { LaptopDetailsComponent } from './laptops/laptop-details/laptop-details.component';
import { LaptopItemComponent } from './laptops/laptop-list/laptop-item/laptop-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LaptopsComponent,
    CustomersComponent,
    LaptopListComponent,
    LaptopEditComponent,
    LaptopDetailsComponent,
    LaptopItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
