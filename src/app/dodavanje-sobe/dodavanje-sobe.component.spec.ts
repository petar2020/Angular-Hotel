import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeSobeComponent } from './dodavanje-sobe.component';

describe('DodavanjeSobeComponent', () => {
  let component: DodavanjeSobeComponent;
  let fixture: ComponentFixture<DodavanjeSobeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DodavanjeSobeComponent]
    });
    fixture = TestBed.createComponent(DodavanjeSobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
