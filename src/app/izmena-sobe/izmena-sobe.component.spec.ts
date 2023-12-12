import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaSobeComponent } from './izmena-sobe.component';

describe('IzmenaSobeComponent', () => {
  let component: IzmenaSobeComponent;
  let fixture: ComponentFixture<IzmenaSobeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IzmenaSobeComponent]
    });
    fixture = TestBed.createComponent(IzmenaSobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
