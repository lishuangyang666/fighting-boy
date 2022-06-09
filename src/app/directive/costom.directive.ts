import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCostom]'
})
export class CostomDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
   }

}
