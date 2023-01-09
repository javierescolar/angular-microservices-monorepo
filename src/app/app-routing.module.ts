import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './ui/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    loadChildren: async () =>
      (await import('../../projects/products/src/public-api')).ProductsModule,
  },
  {
    path: 'inventory',
    loadChildren: async () =>
      (await import('../../projects/inventory/src/public-api')).InventoryModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
