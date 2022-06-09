import { Directive,TemplateRef  } from '@angular/core';

@Directive({
  selector: '[appAppChildRef]'
})
export class AppChildRefDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
