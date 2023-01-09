import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InventoryComponent } from './ui/inventory.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
