import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { Effects } from './application/store/effects';
import { featureKey, reducer } from './application/store/reducer';
import { AngularMaterialModule } from './core/angular-material.module';
import { InventoryRepository } from './domain/inventory.repository';
import { MockInventoryService } from './infrastucture/mock/inventory-mock.service';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './ui/inventory.component';

@NgModule({
  declarations: [InventoryComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    InventoryRoutingModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([Effects]),
  ],
  providers: [
    {
      provide: InventoryRepository,
      useClass: MockInventoryService,
    },
  ],
})
export class InventoryModule {}
