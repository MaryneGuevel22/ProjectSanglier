import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInterpretationComponent } from './dialog-interpretation.component';

describe('DialogInterpretationComponent', () => {
  let component: DialogInterpretationComponent;
  let fixture: ComponentFixture<DialogInterpretationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInterpretationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogInterpretationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
