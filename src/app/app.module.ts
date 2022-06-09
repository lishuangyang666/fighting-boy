import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule}from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMainComponent } from './custom-main/custom-main.component';
import { MainChildOneComponent } from './custom-main/main-child-one/main-child-one.component';
import { AppChildRefDirective } from './app-child-ref.directive';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './parent/child1/child1.component';
import { Child2Component } from './parent/child2/child2.component';
import { DynamicChildComponent } from './parent/dynamic-child/dynamic-child.component';
import { CostomDirective } from './directive/costom.directive';
import { CustomInputDirective } from './directive/custom-input.directive';
import { NewCustomModule } from './new-custom/new-custom.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomMainComponent,
    MainChildOneComponent,
    AppChildRefDirective,
    ParentComponent,
    Child1Component,
    Child2Component,
    DynamicChildComponent,
    CostomDirective,
    CustomInputDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NewCustomModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DynamicChildComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
