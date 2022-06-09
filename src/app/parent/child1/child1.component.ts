import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CompEventService } from 'src/app/event.component';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit,AfterViewInit {
 @Input() bindProp :any
 @Input() bindParent: any
 @Output() bindParentEvent = new EventEmitter()
  constructor(private event:CompEventService) { }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.bindProp);
    console.log(this.bindParent);
   // this.bindParent.parentValue = 'update parent bindprop' //这个地方子组件去修改父组件的值会报错的
    // console.log(this.bindProp);
  }
  clickChild1Button(){
    //const clickChild1Data ='I am from child1'
    const clickChild1Data ={
      name:'I am from child1'
    }
    this.bindParentEvent.emit(clickChild1Data);
  }
  clickStart(){
    console.log('click child start function');
  }
  clickEnd(){
    console.log('click child end function');
  }
  clickEvent(){
    const data='I am from child1  to child2 data'
    this.event.dataEvent.emit(data);
  }

}
