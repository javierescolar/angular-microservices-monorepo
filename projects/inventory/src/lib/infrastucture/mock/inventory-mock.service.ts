import { delay, Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

import { Inventory } from '../../domain/inventory';
import { InventoryRepository } from '../../domain/inventory.repository';

const INVENTORY_DATA: Inventory[] = [
  {
    id: 1,
    product: 'Product 1',
    quantity: 50,
    creation: new Date(),
    updated: new Date(),
    oldQuantity: 75,
  },
  {
    id: 2,
    product: 'Product 2',
    quantity: 25,
    creation: new Date(),
    updated: new Date(),
    oldQuantity: 75,
  },
  {
    id: 3,
    product: 'Product 3',
    quantity: 210,
    creation: new Date(),
    updated: new Date(),
    oldQuantity: 75,
  },
  {
    id: 4,
    product: 'Product 4',
    quantity: 5,
    creation: new Date(),
    updated: new Date(),
    oldQuantity: 75,
  },
  {
    id: 5,
    product: 'Product 5',
    quantity: 100,
    creation: new Date(),
    updated: new Date(),
    oldQuantity: 75,
  },
];

const TIME_DELAY = 1500;

@Injectable()
export class MockInventoryService extends InventoryRepository {
  private inventory = [...INVENTORY_DATA];
  find(): Observable<Inventory[]> {
    return of(this.inventory).pipe(delay(TIME_DELAY));
  }
}
