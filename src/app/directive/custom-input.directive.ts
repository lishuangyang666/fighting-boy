import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomInput]'
})
export class CustomInputDirective implements OnChanges, AfterViewInit {
  @Input() data:any
  @Input() dafalut:any
  constructor(private el:ElementRef ) {
    console.log(this.el);
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.el.nativeElement.style.backgroundColor = this.data||this.dafalut
  }
  ngAfterViewInit(): void {
    // this.highlight();
  }

  // highlight(){
  //     this.el.nativeElement.style.backgroundColor = this.data
  // }
}
