import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '../../../node_modules/@ionic/angular';

@NgModule({
  declarations: [
    HeaderComponent 
  ],
  exports: [
    HeaderComponent //se exportan solo los que se usan directamente en otras pages
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
