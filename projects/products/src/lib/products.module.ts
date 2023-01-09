import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { Effects } from './application/store/effects';
import { featureKey, reducer } from './application/store/reducer';
import { AngularMaterialModule } from './core/angular-material.module';
import { ProductRepository } from './domain/product.repository';
import { MockProductService } from './infrastucture/mock/product-mock.service';
import { ProductsRoutingModule } from './products-routing.module';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { ProductsFormComponent } from './ui/products-form/products-form.component';
import { ProductsListComponent } from './ui/products-list/products-list.component';
import { ProductsComponent } from './ui/products.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsFormComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AngularMaterialModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([Effects]),
  ],
  providers: [
    {
      provide: ProductRepository,
      useClass: MockProductService,
    },
  ],
  exports: [ProductsComponent, ProductsListComponent],
})
export class ProductsModule {}
