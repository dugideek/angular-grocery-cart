import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let groceries = [
      {id: 11, name: 'Tomato', price: 1},
      {id: 12, name: 'Onion', price: 1},
      {id: 13, name: 'Cheese', price: 1},
      {id: 14, name: 'Milk', price: 1},
      {id: 15, name: 'Bread', price: 1},
      {id: 16, name: 'Cereal', price: 1},
      {id: 17, name: 'Rice', price: 1},
      {id: 18, name: 'Chicken', price: 1},
      {id: 19, name: 'Pork', price: 1},
      {id: 20, name: 'Beef', price: 1}
    ];
    return {groceries};
  }
}
