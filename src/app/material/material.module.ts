import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule

  ]
})
export class MaterialModule { }
