import { createAction, props } from '@ngrx/store';

import { Product } from '../../domain/product';

export const loadProducts = createAction('[Product] Load Products');

export const loadProductsOk = createAction(
  '[Product] Load Products Ok',
  props<{ products: Product[] }>()
);

export const loadProductsError = createAction(
  '[Product] Load Products Error',
  props<{ error: string }>()
);
