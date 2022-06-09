import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { New1CustomComponent } from './new1-custom/new1-custom.component';
import { New1CustomNameComponent } from './new1-custom-name/new1-custom-name.component';
import { new1CustomRoutingModules } from './new1-cutom-routing.module';



@NgModule({
  declarations: [
    New1CustomComponent,
    New1CustomNameComponent
  ],
  imports: [
    CommonModule,
    new1CustomRoutingModules
  ]
})
export class New1CustomModule { }
