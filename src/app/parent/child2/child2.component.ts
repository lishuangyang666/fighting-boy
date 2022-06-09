import { Component, OnDestroy, OnInit } from '@angular/core';
import { CompEventService } from 'src/app/event.component';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit,OnDestroy {
  dataEvent :any
  constructor(private event:CompEventService) {
    this.dataEvent = this.event.dataEvent.subscribe(data=>{
      console.log(data);
    })
  }
  ngOnDestroy(): void {
    this.dataEvent.unsubscribe();
  }

  ngOnInit(): void {
  }

}
