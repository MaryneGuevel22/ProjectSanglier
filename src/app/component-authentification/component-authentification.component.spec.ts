import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAuthentificationComponent } from './component-authentification.component';

describe('ComponentAuthentificationComponent', () => {
  let component: ComponentAuthentificationComponent;
  let fixture: ComponentFixture<ComponentAuthentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentAuthentificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
