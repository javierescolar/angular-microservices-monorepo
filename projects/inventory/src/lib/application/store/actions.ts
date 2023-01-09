import { createAction, props } from '@ngrx/store';

import { Inventory } from '../../domain/inventory';

export const loadInventory = createAction('[Inventory] Load Inventorys');

export const loadInventoryOk = createAction(
  '[Inventory] Load Inventorys Ok',
  props<{ inventory: Inventory[] }>()
);

export const loadInventoryError = createAction(
  '[Inventory] Load Inventorys Error',
  props<{ error: string }>()
);
