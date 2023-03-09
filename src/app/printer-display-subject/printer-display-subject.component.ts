import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-printer-display-subject',
  templateUrl: './printer-display-subject.component.html',
  styleUrls: ['./printer-display-subject.component.css']
})
export class PrinterDisplaySubjectComponent implements OnInit {
  inputTextFromOtherCompSub: string;
  constructor(private dataService: DataService) {


  }
  ngOnInit(): void {
    this.dataService.subjectEmitter.subscribe((val) => {
      this.inputTextFromOtherCompSub = val;
    });
  }
}
