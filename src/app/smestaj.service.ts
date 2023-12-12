
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Smestaj } from './smestaj-lista/smestaj.model'; // Ažurirajte putanju ako je potrebno

@Injectable({ providedIn: 'root' })
export class SmestajService {
  private apiUrl = 'http://localhost:8080/rooms'; // URL vašeg Express servera
  private smestaji: Smestaj[] = [];
  private smestajiUpdated = new Subject<Smestaj[]>();

  constructor(private http: HttpClient) {}

  dohvatiSmestaje(): void {
    this.http.get<Smestaj[]>(this.apiUrl).subscribe((data) => {
      this.smestaji = data;
      this.smestajiUpdated.next(this.smestaji.slice());
      console.log(this.smestajiUpdated);
    });
  }
  dohvatiSobuById(id: number): Observable<Smestaj> {
    return this.http.get<Smestaj>(`${this.apiUrl}/${id}`);
}
  getSmestaji() {
    return this.smestaji.slice();
  }

  getSmestajiUpdateListener(): Observable<Smestaj[]> {
    return this.smestajiUpdated.asObservable();
  }

  dodajSmestaj(smestaj: Smestaj) {
    this.smestaji.push(smestaj);
    this.smestajiUpdated.next(this.smestaji.slice());
  }

  obrisiSobu(id: number) {
    // Prikaz potvrde pre brisanja sobe
    const potvrda = window.confirm('Da li ste sigurni da želite da obrišete sobu?');
    
    if (potvrda) {
      // Implementirajte logiku za brisanje sobe na serveru
      const deleteUrl = `${this.apiUrl}/${id}`;
      this.http.delete(deleteUrl).subscribe(() => {
        // Filtrirajte sobe da biste uklonili obrisani element
        const updatedSmestaji = this.smestaji.filter((smestaj) => smestaj.id !== id);
        this.smestaji = updatedSmestaji;
        this.smestajiUpdated.next(this.smestaji.slice());
  
        // Prikaz poruke o uspešnom brisanju
        alert('Soba uspešno obrisana');
      });
    }
  }
  
  izmeniSobu(id: number, updatedRoomData: Smestaj): Observable<any> {
    const updateUrl = `${this.apiUrl}/${id}`;
    return this.http.put(updateUrl, updatedRoomData);
  }
}

// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
// import { Smestaj } from './smestaj-lista/smestaj.model'; 

// @Injectable({ providedIn: 'root' })
// export class SmestajService {
//   private smestaji: Smestaj[] = [
//     { naziv: 'Luksuzna Soba', brojKreveta: 2, cenaPoNoci: 100, klima: false, miniBar: false, sauna: false },
//     { naziv: 'Jednokrevetna Soba', brojKreveta: 1, cenaPoNoci: 50, klima: false, miniBar: false, sauna: false },
//     { naziv: 'Apartman', brojKreveta: 2, cenaPoNoci: 200, klima: false, miniBar: false, sauna: false },
//   ];  private smestajiUpdated = new Subject<Smestaj[]>();

//   getSmestaji() {
//     return this.smestaji.slice();
//   }

//   getSmestajiUpdateListener() {
//     return this.smestajiUpdated.asObservable();
//   }

//   dodajSmestaj(smestaj: Smestaj) {
//     this.smestaji.push(smestaj);
//     this.smestajiUpdated.next(this.smestaji.slice());
//   }
// }
