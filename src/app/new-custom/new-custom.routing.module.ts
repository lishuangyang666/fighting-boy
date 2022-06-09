import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomUserComponent } from "./custom-user/custom-user.component";

const routes: Routes = [
  {path:'',
  component: CustomUserComponent,
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class newCustomRoutingModules { }
