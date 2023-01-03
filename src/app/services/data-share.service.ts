import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  constructor() { }
  @Output() Server__Emitter: EventEmitter<any> = new EventEmitter();
}
