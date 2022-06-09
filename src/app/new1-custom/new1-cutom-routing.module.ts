import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { New1CustomComponent } from "./new1-custom/new1-custom.component";


const routes: Routes = [
  {path:'',
  component: New1CustomComponent,
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class new1CustomRoutingModules { }
