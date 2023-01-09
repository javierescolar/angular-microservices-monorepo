import { createReducer, on } from '@ngrx/store';

import { Inventory } from '../../domain/inventory';
import * as fromActions from './actions';

export const featureKey = 'inventory';

export interface State {
  loading: boolean;
  inventory: Inventory[];
}

export const initialState: State = {
  inventory: [],
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(fromActions.loadInventory, (state, payload) => ({
    ...state,
    loading: true,
  })),
  on(fromActions.loadInventoryOk, (state, payload) => ({
    ...state,
    loading: false,
    inventory: payload.inventory,
  }))
);
