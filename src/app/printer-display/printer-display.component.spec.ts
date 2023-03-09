import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterDisplayComponent } from './printer-display.component';

describe('PrinterDisplayComponent', () => {
  let component: PrinterDisplayComponent;
  let fixture: ComponentFixture<PrinterDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinterDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
