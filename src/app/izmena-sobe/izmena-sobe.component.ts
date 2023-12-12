import { Component, Input, OnInit } from '@angular/core';
import { Soba } from '../dodavanje-sobe/soba.model';
import { ActivatedRoute } from '@angular/router';
import { Smestaj } from '../smestaj-lista/smestaj.model';
import { SmestajService } from '../smestaj.service';

@Component({
  selector: 'app-izmena-sobe',
  templateUrl: './izmena-sobe.component.html',
  styleUrls: ['./izmena-sobe.component.css']
})
export class IzmenaSobeComponent implements OnInit {
  smestaj: Smestaj = new Smestaj();

  constructor(private smestajService: SmestajService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Dohvatanje ID-a sobe iz URL-a ili na drugi način
    const smestajId = this.route.snapshot.params['id'];
    // Pretpostavimo da imate metodu za dohvatanje detalja sobe po ID-u
    this.smestajService.dohvatiSobuById(smestajId).subscribe(data => {
      this.smestaj = data;
    });
  }

  onSubmit(): void {
    this.smestajService.izmeniSobu(this.smestaj.id, this.smestaj).subscribe({
      next: () => {
        // Prikazivanje alerta kada je soba uspešno izmenjena
        alert('Soba je uspešno izmenjena.');
      },
      error: (error) => {
        console.error('Došlo je do greške', error);
        alert('Došlo je do greške prilikom izmene sobe.');
      }
    });
  }
}