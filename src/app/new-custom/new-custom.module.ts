import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomUserComponent } from './custom-user/custom-user.component';
import { newCustomRoutingModules } from './new-custom.routing.module';
import { MouduleServceService } from '../service/moudule-servce.service';



@NgModule({
  declarations: [
    CustomUserComponent
  ],
  imports: [
    CommonModule,
    newCustomRoutingModules
  ]
  ,
  providers:[
    MouduleServceService
  ]
})
export class NewCustomModule { }
