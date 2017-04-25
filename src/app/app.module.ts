import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { GroceriesComponent }   from './groceries.component';
import { MyCartComponent }      from './my-cart.component';
import { DropCartComponent }    from './drop-cart.component';
import { GroceryService }       from './groceries.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    GroceriesComponent,
    MyCartComponent,
    DropCartComponent
  ],
  providers: [ GroceryService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
