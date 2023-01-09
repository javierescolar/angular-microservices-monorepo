import { createFeatureSelector, createSelector } from '@ngrx/store';

import { featureKey, State } from './reducer';

const productState = createFeatureSelector<State>(featureKey);

export const selectAllProducts = createSelector(
  productState,
  (state) => state.products
);

export const loadingProducts = createSelector(
  productState,
  (state) => state.loading
);
