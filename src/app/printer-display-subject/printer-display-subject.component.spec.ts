import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterDisplaySubjectComponent } from './printer-display-subject.component';

describe('PrinterDisplaySubjectComponent', () => {
  let component: PrinterDisplaySubjectComponent;
  let fixture: ComponentFixture<PrinterDisplaySubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinterDisplaySubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinterDisplaySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
