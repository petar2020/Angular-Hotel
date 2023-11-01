import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmestajListaComponent } from './smestaj-lista.component';

describe('SmestajListaComponent', () => {
  let component: SmestajListaComponent;
  let fixture: ComponentFixture<SmestajListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmestajListaComponent]
    });
    fixture = TestBed.createComponent(SmestajListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
