import { catchError, EMPTY, map, mergeMap } from 'rxjs';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { InventoryRepository } from '../../domain/inventory.repository';
import * as fromActions from './actions';

@Injectable()
export class Effects {
  constructor(
    private actions$: Actions,
    private readonly repository: InventoryRepository
  ) {}

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadInventory),
      mergeMap(() =>
        this.repository.find().pipe(
          map((inventory) => fromActions.loadInventoryOk({ inventory })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
