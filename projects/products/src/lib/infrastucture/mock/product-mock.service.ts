import { delay, Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

import { Product } from '../../domain/product';
import { ProductRepository } from '../../domain/product.repository';

const PRODUCT_DATA: Product[] = [
  {
    id: 1,
    description: 'Product 1',
    price: 0.99,
    creation: new Date(),
    updated: new Date(),
  },
  {
    id: 2,
    description: 'Product 2',
    price: 0.99,
    creation: new Date(),
    updated: new Date(),
  },
  {
    id: 3,
    description: 'Product 3',
    price: 0.99,
    creation: new Date(),
    updated: new Date(),
  },
  {
    id: 4,
    description: 'Product 4',
    price: 0.99,
    creation: new Date(),
    updated: new Date(),
  },
  {
    id: 5,
    description: 'Product 5',
    price: 0.99,
    creation: new Date(),
    updated: new Date(),
  },
];

const TIME_DELAY = 1500;

@Injectable()
export class MockProductService extends ProductRepository {
  private products = [...PRODUCT_DATA];
  find(): Observable<Product[]> {
    return of(this.products).pipe(delay(TIME_DELAY));
  }
}
