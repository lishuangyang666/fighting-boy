import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicChildComponent } from './dynamic-child/dynamic-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {
  @ViewChild('child') childComponent: any;
  @ViewChild("Container", { read: ViewContainerRef })
  container!: ViewContainerRef;
  componentRef!: ComponentRef<DynamicChildComponent>;
  constructor(private resolver: ComponentFactoryResolver) {

   }
  parentValue = 'I am the parent data,I will Input the child1'
  dataFromChild = ''
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      console.log(this.childComponent);
      this.childComponent.clickStart();
      this.childComponent.clickEnd();
      console.log(this.childComponent.bindProp);
      this.createComponent();
  }
  ngOnDestroy() {
    this.componentRef.destroy()
  }

  revieceChildEvent(data:any){
    this.dataFromChild = data.name;
  }
  createComponent() {
    //每次需要创建组件时，需要删除之前的视图，否则组件容器中会出现多个视图
    this.container.clear();
    //ComponentFactoryResolver 服务对象中，提供了一个很重要的方法 - resolveComponentFactory() ，该方法接收一个组件类作为参数，并返回 ComponentFactory 。
    const factory: ComponentFactory<DynamicChildComponent> =
    this.resolver.resolveComponentFactory(DynamicChildComponent);
    //create() 方法创建对应的组件，并将组件添加到我们的容器。
    this.componentRef = this.container.createComponent(factory);
    // this.componentRef.instance.type = type;
    //  this.componentRef.instance.output.subscribe((msg: string) => console.log(msg));
  }

}
