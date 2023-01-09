import { Observable } from 'rxjs';

import { Inventory } from './inventory';

export abstract class InventoryRepository {
  abstract find(): Observable<Inventory[]>;
}
