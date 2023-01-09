import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadProducts } from '../../application/store/actions';
import { State } from '../../application/store/reducer';
import { selectAllProducts } from '../../application/store/selectors';

@Component({
  selector: 'lib-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products$ = this.store.select(selectAllProducts);
  displayedColumns: string[] = [
    'id',
    'description',
    'price',
    'creation',
    'updated',
    'options',
  ];

  constructor(private readonly store: Store<State>) {}
  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }
}
