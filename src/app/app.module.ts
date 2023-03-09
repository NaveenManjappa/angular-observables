import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrinterInputComponent } from './printer-input/printer-input.component';
import { PrinterDisplayComponent } from './printer-display/printer-display.component';
import { FormsModule } from '@angular/forms';
import { PrinterInputSubjectComponent } from './printer-input-subject/printer-input-subject.component';
import { PrinterDisplaySubjectComponent } from './printer-display-subject/printer-display-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    PrinterInputComponent,
    PrinterDisplayComponent,
    PrinterInputSubjectComponent,
    PrinterDisplaySubjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
