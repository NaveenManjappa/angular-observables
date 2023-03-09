import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-printer-input',
  templateUrl: './printer-input.component.html',
  styleUrls: ['./printer-input.component.css']
})
export class PrinterInputComponent {
  enteredText: string;
  subjectText: string;
  constructor(private dataService: DataService) {


  }
  onBtnClick() {
    console.log(this.enteredText);
    this.dataService.raiseDataEmitterEvent(this.enteredText);

  }
}
