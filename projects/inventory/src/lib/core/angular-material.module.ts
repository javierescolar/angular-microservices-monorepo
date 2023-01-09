import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  exports: [MatIconModule, MatButtonModule, MatListModule, MatTableModule],
})
export class AngularMaterialModule {}
