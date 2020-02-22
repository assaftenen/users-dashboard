import { MaterialModule } from './../../material/material.module';
import { HeaderComponent } from './../../components/header/header.component';
import { UserComponent } from './../../containers/user/user.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';






@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule


  ],
  declarations: [HeaderComponent, UserComponent],
  exports: [HeaderComponent, UserComponent],
  bootstrap: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
