import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  // All of the components and modules we have created go here
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  // Third Party Modules Go in the Import Array
  imports: [
    BrowserModule, 
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
