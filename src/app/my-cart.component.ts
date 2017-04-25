import { Component, OnInit } from '@angular/core';
import { Grocery } from './grocery';
import { GroceryService } from './groceries.service';
import { Router } from '@angular/router';



@Component({
  selector: 'my-cart',
  providers: [GroceryService],
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  constructor(private GroceryService: GroceryService,
    private router: Router) { }
  groceries: Grocery[];
  selectedGrocery: Grocery;
  groceriesTotal: number;

  onSelect(grocery: Grocery): void {
    this.selectedGrocery = grocery;
  }
  getGroceries(): void {
    this.GroceryService.getCart().then(Groceries => this.groceries = Groceries).then(() => this.getGroceriesTotal());
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedGrocery.id]);
  }
  
  getGroceriesTotal(): void {
    this.groceriesTotal = 0;
    this.groceries.forEach(grocery => {
      this.groceriesTotal += grocery.price;
    });
  }

  ngOnInit(): void {
    this.getGroceries();
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.GroceryService.create(name)
  //     .then(grocery => {
  //       this.groceries.push(grocery);
  //       this.selectedGrocery = null;
  //     });
  // }

  delete(Grocery: Grocery): void {
    this.GroceryService
        .deleteFromCart(Grocery)
        .then(() => {
          this.groceries = this.groceries.filter(h => h !== Grocery);
          if (this.selectedGrocery === Grocery) { this.selectedGrocery = null; }
          this.getGroceriesTotal()
        });
  }
}
