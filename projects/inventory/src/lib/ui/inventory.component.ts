import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadInventory } from '../application/store/actions';
import { State } from '../application/store/reducer';
import { selectAllInventory } from '../application/store/selectors';

@Component({
  selector: 'lib-inventory',
  templateUrl: `./inventory.component.html`,
  styles: [],
})
export class InventoryComponent {
  products$ = this.store.select(selectAllInventory);
  displayedColumns: string[] = [
    'id',
    'product',
    'quantity',
    'oldQuantity',
    'creation',
    'updated',
    'options',
  ];

  constructor(private readonly store: Store<State>) {}
  ngOnInit(): void {
    this.store.dispatch(loadInventory());
  }
}
