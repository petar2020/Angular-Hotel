import { Component, ViewChild } from '@angular/core';
import { Smestaj } from './smestaj-lista/smestaj.model';
import { SmestajListaComponent } from './smestaj-lista/smestaj-lista.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(SmestajListaComponent, { static: false }) smestajListaComponent!: SmestajListaComponent;

  title = 'Angular-Hotel';
  smestaj: Smestaj = {
    id: 0, 
    naziv: '',
    brojKreveta: 0,
    cenaPoNoci: 0,
    klima: false,
    miniBar: false,
    sauna: false
  };

  dodajSobu() {
    if (this.smestajListaComponent) {
      this.smestajListaComponent.smestaji.push(this.smestaj);

      this.smestaj = {
        id: 0, 
        naziv: '',
        brojKreveta: 0,
        cenaPoNoci: 0,
        klima: false,
        miniBar: false,
        sauna: false
      };
    } else {
      console.error('Nemam referencu na SmestajListaComponent!');
    }
  }
}
