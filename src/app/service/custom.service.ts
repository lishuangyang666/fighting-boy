import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor() { }
  private parentData = new Subject<string>();
  childUseData$ = this.parentData.asObservable();
  getParentData(data:any){
    this.parentData.next(data);
  }


}
