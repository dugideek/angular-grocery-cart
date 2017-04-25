import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Grocery } from './grocery';
import { CART } from './cart';

@Injectable()
export class GroceryService {
    private cartUrl = 'api/cart'; 
    private groceriesUrl = 'api/groceries';
  constructor(private http: Http) { }

  getGroceries(): Promise<Grocery[]> {
    return this.http.get(this.groceriesUrl)
               .toPromise()
               .then(response => response.json().data as Grocery[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  getGrocery(id: number): Promise<Grocery> {
    const url = `${this.groceriesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Grocery)
      .catch(this.handleError);
  }

  getCart(): Promise<Grocery[]> {
    return Promise.resolve(CART);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(grocery: Grocery): Promise<Grocery> {
    const url = `${this.groceriesUrl}/${grocery.id}`;
    return this.http
      .put(url, JSON.stringify(grocery), {headers: this.headers})
      .toPromise()
      .then(() => grocery)
      .catch(this.handleError);
  }

  create(name: string, price: number): Promise<Grocery> {
    return this.http
      .post(this.groceriesUrl, JSON.stringify({name: name, price: price}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Grocery)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.groceriesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  deleteFromCart(grocery: Grocery): Promise<Grocery>{
    CART.splice(CART.indexOf(grocery),1);
    return Promise.resolve(grocery);
  }

  addToCart(grocery: Grocery): Promise<Grocery> {
    
    CART.push(grocery);

    return Promise.resolve(grocery);
  }
}
