import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutVisiteurComponent } from './ajout-visiteur.component';

describe('AjoutVisiteurComponent', () => {
  let component: AjoutVisiteurComponent;
  let fixture: ComponentFixture<AjoutVisiteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutVisiteurComponent]
    });
    fixture = TestBed.createComponent(AjoutVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
