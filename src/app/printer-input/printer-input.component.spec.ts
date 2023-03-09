import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterInputComponent } from './printer-input.component';

describe('PrinterInputComponent', () => {
  let component: PrinterInputComponent;
  let fixture: ComponentFixture<PrinterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinterInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
