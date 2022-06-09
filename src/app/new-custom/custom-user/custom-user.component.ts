import { Component, OnInit } from '@angular/core';
import { MouduleServceService } from 'src/app/service/moudule-servce.service';

@Component({
  selector: 'app-custom-user',
  templateUrl: './custom-user.component.html',
  styleUrls: ['./custom-user.component.css']
})
export class CustomUserComponent implements OnInit {

  constructor(private MouduleService:MouduleServceService) { }

  ngOnInit(): void {
    this.MouduleService.hasInModuleService();
  }

}
