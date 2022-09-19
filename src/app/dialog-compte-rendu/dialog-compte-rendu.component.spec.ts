import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCompteRenduComponent } from './dialog-compte-rendu.component';

describe('DialogCompteRenduComponent', () => {
  let component: DialogCompteRenduComponent;
  let fixture: ComponentFixture<DialogCompteRenduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCompteRenduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCompteRenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
