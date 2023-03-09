import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterInputSubjectComponent } from './printer-input-subject.component';

describe('PrinterInputSubjectComponent', () => {
  let component: PrinterInputSubjectComponent;
  let fixture: ComponentFixture<PrinterInputSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinterInputSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinterInputSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
