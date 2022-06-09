import { Component, OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy, SimpleChanges, Input, ContentChild, Output, EventEmitter} from '@angular/core';
import { CustomService } from 'src/app/service/custom.service';
import { AppChildRefDirective }from '../../app-child-ref.directive';
@Component({
  selector: 'app-main-child-one',
  templateUrl: './main-child-one.component.html',
  styleUrls: ['./main-child-one.component.css']
})
export class MainChildOneComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input() mainInput:any
  @Output() revieceChild= new EventEmitter();
  constructor(private customService:CustomService) {
    this.customService.childUseData$.subscribe(data=>{
      this.recevieParentData = data;
    })
  }
  @ContentChild(AppChildRefDirective, { static: true }) childRef!: AppChildRefDirective;
  recevieParentData = '';
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
  clickChild(){
    this.revieceChild.emit('this data is from child');
  }
}


