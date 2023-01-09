import { createFeatureSelector, createSelector } from '@ngrx/store';

import { featureKey, State } from './reducer';

const productState = createFeatureSelector<State>(featureKey);

export const selectAllInventory = createSelector(
  productState,
  (state) => state.inventory
);

export const loadingInventory = createSelector(
  productState,
  (state) => state.loading
);
