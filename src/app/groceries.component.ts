import { Component, OnInit } from '@angular/core';
import { Grocery } from './grocery';
import { GroceryService } from './groceries.service';
import { Router } from '@angular/router';



@Component({
  selector: 'my-groceries',
  providers: [GroceryService],
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
  constructor(private GroceryService: GroceryService,
    private router: Router) { }
  groceries: Grocery[];
  selectedGrocery: Grocery;
  onSelect(Grocery: Grocery): void {
    this.selectedGrocery = Grocery;
  }
  getGroceries(): void {
    this.GroceryService.getGroceries().then(Groceries => this.groceries = Groceries);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedGrocery.id]);
  }

  ngOnInit(): void {
    this.getGroceries();
  }

  addToCart(grocery: Grocery): void {
    this.selectedGrocery = grocery;
    this.GroceryService.addToCart(this.selectedGrocery);
  }

  add(name: string, price: number): void {
    name = name.trim();
    if (!name) { return; }
    this.GroceryService.create(name, price)
      .then(Grocery => {
        this.groceries.push(Grocery);
        this.selectedGrocery = null;
      });
  }

  delete(Grocery: Grocery): void {
    this.GroceryService
        .delete(Grocery.id)
        .then(() => {
          this.groceries = this.groceries.filter(h => h !== Grocery);
          if (this.selectedGrocery === Grocery) { this.selectedGrocery = null; }
        });
  }
}
