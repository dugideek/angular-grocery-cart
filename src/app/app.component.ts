import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <div class="container">
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/cart" routerLinkActive="active">My Cart</a>
      <a routerLink="/groceries" routerLinkActive="active">Groceries</a>
    </nav>
   </div>
   <div class="container">
      <router-outlet></router-outlet>
   </div>`,
   styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'My Shopping Cart';
}
