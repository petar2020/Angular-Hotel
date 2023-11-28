import { Component, OnInit } from '@angular/core';
import { Smestaj } from '../smestaj-lista/smestaj.model';
import { SmestajService } from '../smestaj.service';

@Component({
  selector: 'app-dodavanje-sobe',
  templateUrl: './dodavanje-sobe.component.html',
  styleUrls: ['./dodavanje-sobe.component.css']
})
export class DodavanjeSobeComponent implements OnInit {
  smestaj: Smestaj = {
    naziv: '',
    brojKreveta: 0,
    cenaPoNoci: 0,
    klima: false,
    miniBar: false,
    sauna: false
  };
  dodatniTroskovi: number = 0;

  constructor(private smestajService: SmestajService) { }

  ngOnInit(): void {
  }


onNazivChange(): void {
  if (this.smestaj!.naziv.length < 6) {
    console.log('Dužina naziva sobe mora biti najmanje 6 karaktera.');
  }
}
  
  izracunajDodatneTroskove(): void {
    this.dodatniTroskovi = 0;
    if (this.smestaj.klima) {
      this.dodatniTroskovi += 100; 
    }
    if (this.smestaj.miniBar) {
      this.dodatniTroskovi += 150; 
    }
    if (this.smestaj.sauna) {
      this.dodatniTroskovi += 200; 
    }
  }

  dodajSobu(): void {
    if (this.smestaj.naziv.length < 6) {
      alert('Dužina naziva sobe mora biti najmanje 6 karaktera.');
      return;
    }
    if (this.smestaj.brojKreveta <= 0) {
      alert('Broj kreveta mora biti veći od 0.');
      return;
    }
    if (this.smestaj.cenaPoNoci <= 0) {
      alert('Cena po noći mora biti veća od 0.');
      return;
    }
    
    this.izracunajDodatneTroskove();
    console.log(`Dodatni troškovi: ${this.dodatniTroskovi} dinara.`);
    this.smestajService.dodajSmestaj(this.smestaj);
    this.smestaj = new Smestaj(); // Reset formu
  }
}
