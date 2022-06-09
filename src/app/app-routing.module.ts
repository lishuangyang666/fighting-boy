import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CustomMainComponent } from './custom-main/custom-main.component';
import { MainChildOneComponent } from './custom-main/main-child-one/main-child-one.component';
import { New1CustomModule } from './new1-custom/new1-custom.module';
import { Child1Component } from './parent/child1/child1.component';
import { Child2Component } from './parent/child2/child2.component';
import { ParentComponent } from './parent/parent.component';
const routes: Routes = [
  { path:'main',
    component: CustomMainComponent,
      children:[
      {
        path:'subMain',
        component: MainChildOneComponent,
        }
      ]
  },
  {
    path:'parent',
    component: ParentComponent,
      children:[
      {
        path:'child1',
        component: Child1Component,
        },
        {
          path:'child2',
          component: Child2Component,
        },
      ]

  },
  {
    path:'user',
    loadChildren: () => import('./new-custom/new-custom.module').then(m => m.NewCustomModule)
  },
  {
    path:'dev',
    loadChildren:'./new1-custom/new1-custom.module#New1CustomModule'
    // loadChildren: () => import('./new1-custom/new1-custom.module').then(m => m.New1CustomModule)
  },

  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
