import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsFormComponent } from './ui/products-form/products-form.component';
import { ProductsListComponent } from './ui/products-list/products-list.component';
import { ProductsComponent } from './ui/products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: 'list', component: ProductsListComponent, pathMatch: 'full' },
      { path: 'add', component: ProductsFormComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: ProductsFormComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
