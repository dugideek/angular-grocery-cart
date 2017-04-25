import { Component, OnInit } from '@angular/core'
import { Grocery } from './grocery'
import { GroceryService } from './groceries.service'

@Component({
    selector: 'drop-cart',
    providers: [GroceryService],
    template: ``
})
export class DropCartComponent implements OnInit {

    ngOnInit(): void {
    
  }
}