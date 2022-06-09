import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CustomService } from '../service/custom.service';
import { MouduleServceService } from '../service/moudule-servce.service';

@Component({
  selector: 'app-custom-main',
  templateUrl: './custom-main.component.html',
  styleUrls: ['./custom-main.component.css']
})
export class CustomMainComponent implements OnInit{
  inputData='';
  mainParentTitle='';
  myValue=[{name:'Jack',age:15},{name:'Timi',age:16},{name:'Curry',age:20},{name:'Jaly',age:18},{name:'aa',age:9}]
  showValue ='';
  currentClasses={}
  currentStyle={}
  canSave = false;
  isUnchanged = false;
  isSpecial = false;
  inputData2 = '';
  testIf =true;
  color = 'red'
  constructor(private customservice:CustomService,private moduleService: MouduleServceService) { }


  ngOnInit(): void {
    console.log("ngOnInit");
    this.setCurrentClasses();
    this.setCurrentStyle();
     this.moduleService.hasInModuleService();
  }
  updateParentTitle(data:any){
    console.log(data);
  }
  addClick(){
      this.myValue.push({name:'kk',age:3});
  }
  deleteClick(data:any){
    this.myValue.splice(data,1);
  }
  showClick(data:any){
    this.showValue = data.name;
    this.emitParentDataToChild();
      }
  tempClick(temp:any){
    console.log(temp)
  }
  /* . . . */
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special:  this.isSpecial
    };
  }
  setCurrentStyle() {
    // CSS classes: added/removed per current state of component properties
    this.currentStyle =  {
      'front-size': this.canSave?'16px':'12px',
      'background-color': !this.isUnchanged?'red':'green',
      'height': this.isSpecial?'20px':'30px',
    };
  }
  emitParentDataToChild(){
    this.customservice.getParentData('parentdata to child throw service');
  }
}
