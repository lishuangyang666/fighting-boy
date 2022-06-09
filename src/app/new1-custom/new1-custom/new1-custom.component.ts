import { Component, OnInit } from '@angular/core';
import { MouduleServceService } from 'src/app/service/moudule-servce.service';
import { New1CustomServiceService } from '../new1-custom-service.service';

@Component({
  selector: 'app-new1-custom',
  templateUrl: './new1-custom.component.html',
  styleUrls: ['./new1-custom.component.css'],
  providers:[New1CustomServiceService]
})
export class New1CustomComponent implements OnInit {
  // 构造函数中注册服务
  constructor(private sevice: MouduleServceService,private newservice:New1CustomServiceService) { }

  ngOnInit(): void {
    //在函数中可以调用服务中的方法。
    this.sevice.hasInModuleService();
    this.newservice.declareService();
  }

}
