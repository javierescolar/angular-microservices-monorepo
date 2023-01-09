import { createReducer, on } from '@ngrx/store';

import { Product } from '../../domain/product';
import * as fromActions from './actions';

export const featureKey = 'product';

export interface State {
  loading: boolean;
  products: Product[];
}

export const initialState: State = {
  products: [],
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(fromActions.loadProducts, (state, payload) => ({
    ...state,
    loading: true,
  })),
  on(fromActions.loadProductsOk, (state, payload) => ({
    ...state,
    loading: false,
    products: payload.products,
  }))
);
