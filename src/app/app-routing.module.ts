import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceriesComponent }      from './groceries.component';
import { MyCartComponent }  from './my-cart.component';
const routes: Routes = [
  { path: '', redirectTo: '/cart', pathMatch: 'full' },
  { path: 'groceries',     component: GroceriesComponent },
  { path: 'cart', component: MyCartComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
