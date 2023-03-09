import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-printer-display',
  templateUrl: './printer-display.component.html',
  styleUrls: ['./printer-display.component.css']
})
export class PrinterDisplayComponent implements OnInit {
  inputTextFromOtherComp: string;
  /**
   *
   */
  constructor(private dataService: DataService) {


  }
  ngOnInit() {
    this.dataService.dataEmitter.subscribe((val) => {
      this.inputTextFromOtherComp = val;
    });
  }
}
