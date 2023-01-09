import { Observable } from 'rxjs';

import { Product } from './product';

export abstract class ProductRepository {
  abstract find(): Observable<Product[]>;
}
