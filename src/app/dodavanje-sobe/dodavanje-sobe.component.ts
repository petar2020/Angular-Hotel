import { Component, OnInit } from '@angular/core';
import { Smestaj } from '../smestaj-lista/smestaj.model';
@Component({
  selector: 'app-dodavanje-sobe',
  templateUrl: './dodavanje-sobe.component.html',
  styleUrls: ['./dodavanje-sobe.component.css']
})
export class DodavanjeSobeComponent implements OnInit {
  smestaj: Smestaj = new Smestaj();

  constructor() { }

  ngOnInit(): void {
  }

  dodajSobu() {
    console.log(this.smestaj);
  }
}
