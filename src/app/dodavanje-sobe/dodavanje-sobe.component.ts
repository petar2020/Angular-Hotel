import { Component, OnInit } from '@angular/core';
import { Smestaj } from '../smestaj-lista/smestaj.model';
import { SmestajService } from '../smestaj.service';
import { RoomService } from '../room.service'; // Uverite se da je putanja ispravna
import { HttpClient } from '@angular/common/http'; // Dodajte ovu liniju

@Component({
  selector: 'app-dodavanje-sobe',
  templateUrl: './dodavanje-sobe.component.html',
  styleUrls: ['./dodavanje-sobe.component.css']
})
export class DodavanjeSobeComponent implements OnInit {
  smestaj: Smestaj = {
    id: 0, 
    naziv: '',
    brojKreveta: 0,
    cenaPoNoci: 0,
    klima: false,
    miniBar: false,
    sauna: false
  };
  brojNoci: number = 1;
  dodatniTroskovi: number = 0;
  ukupnaCena: number = 0;

  constructor(
    private smestajService: SmestajService,
    private roomService: RoomService,
    private http: HttpClient
  ) {}


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
  izracunajUkupnuCenu(): void {
    this.ukupnaCena = this.roomService.getPrice(this.smestaj, this.brojNoci) + this.dodatniTroskovi;
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
    this.izracunajUkupnuCenu();
    const novaSoba = {
      naziv: this.smestaj.naziv,
      brojKreveta: this.smestaj.brojKreveta,
      cenaPoNoci: this.smestaj.cenaPoNoci,
      klima: this.smestaj.klima,
      miniBar: this.smestaj.miniBar,
      sauna: this.smestaj.sauna
    };

    // Slanje POST zahteva ka serveru za dodavanje sobe
    this.http.post('http://localhost:8080/add-room', novaSoba).subscribe(
      (response: any) => {
        alert('Soba uspešno dodata');

        // Update the room list by calling the SmestajService method
        this.smestajService.dohvatiSmestaje();

        // Resetujte formu
        this.smestaj = {
          id: 0, 
          naziv: '',
          brojKreveta: 0,
          cenaPoNoci: 0,
          klima: false,
          miniBar: false,
          sauna: false
        };
      },
      (error: { error: any }) => {
        console.error('Greška prilikom dodavanja sobe:', error.error);
      }
    );
  }
}