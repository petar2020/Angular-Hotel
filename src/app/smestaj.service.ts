import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Smestaj } from './smestaj-lista/smestaj.model'; // Ažurirajte putanju ako je potrebno

@Injectable({ providedIn: 'root' })
export class SmestajService {
  private smestaji: Smestaj[] = [
    { naziv: 'Luksuzna Soba', brojKreveta: 2, cenaPoNoci: 100, klima: false, miniBar: false, sauna: false },
    { naziv: 'Jednokrevetna Soba', brojKreveta: 1, cenaPoNoci: 50, klima: false, miniBar: false, sauna: false },
    { naziv: 'Apartman', brojKreveta: 2, cenaPoNoci: 200, klima: false, miniBar: false, sauna: false },
  ];  private smestajiUpdated = new Subject<Smestaj[]>();

  getSmestaji() {
    return this.smestaji.slice();
  }

  getSmestajiUpdateListener() {
    return this.smestajiUpdated.asObservable();
  }

  dodajSmestaj(smestaj: Smestaj) {
    this.smestaji.push(smestaj);
    this.smestajiUpdated.next(this.smestaji.slice());
  }
}
