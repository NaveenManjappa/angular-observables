import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-printer-input-subject',
  templateUrl: './printer-input-subject.component.html',
  styleUrls: ['./printer-input-subject.component.css']
})
export class PrinterInputSubjectComponent {
  enteredText: string;
  constructor(private dataService: DataService) {


  }
  onBtnClick() {
    console.log(this.enteredText);
    this.dataService.raiseDataEmitterSubject(this.enteredText);

  }
}
