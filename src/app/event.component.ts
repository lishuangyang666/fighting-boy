import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CompEventService {

    dataEvent: EventEmitter<any>;
    constructor() {
        this.dataEvent = new EventEmitter();
    }

}
