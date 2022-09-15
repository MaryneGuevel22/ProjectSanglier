import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentListPatientComponent } from './component-list-patient.component';

describe('ComponentListPatientComponent', () => {
  let component: ComponentListPatientComponent;
  let fixture: ComponentFixture<ComponentListPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentListPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentListPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
