import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  dataEmitter = new EventEmitter<string>();
  subjectEmitter = new Subject<string>();

  raiseDataEmitterEvent(data: string) {
    this.dataEmitter.emit(data);

  }
  raiseDataEmitterSubject(data: string) {
    console.log('raiseDataEmitterSubject');

    this.subjectEmitter.next(data);
  }
}
