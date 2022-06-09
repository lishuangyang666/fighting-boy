import { Injectable } from '@angular/core';
import { NewCustomModule } from '../new-custom/new-custom.module';

@Injectable(
//   {
//   providedIn:NewCustomModule
// }
)
export class MouduleServceService {

  constructor() { }
  hasInModuleService(){
    console.log('I will display the in the newCustom modules not display in other');
  }
}
