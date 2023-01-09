import { catchError, EMPTY, map, mergeMap } from 'rxjs';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ProductRepository } from '../../domain/product.repository';
import * as fromActions from './actions';

@Injectable()
export class Effects {
  constructor(
    private actions$: Actions,
    private readonly repository: ProductRepository
  ) {}

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadProducts),
      mergeMap(() =>
        this.repository.find().pipe(
          map((products) => fromActions.loadProductsOk({ products })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
