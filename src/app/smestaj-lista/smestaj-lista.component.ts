import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SmestajService } from '../smestaj.service'; 
import { Smestaj } from './smestaj.model';
import { Injector } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smestaj-lista',
  templateUrl: './smestaj-lista.component.html',
  styleUrls: ['./smestaj-lista.component.css']
})
export class SmestajListaComponent implements OnInit, OnDestroy {
  smestaji: Smestaj[] = [];
  private smestajiSub: Subscription | undefined;
  dialog: any;

  constructor(private router: Router,private smestajService: SmestajService, private injector: Injector) { }

  ngOnInit(): void {
    // Dohvatanje smeštaja sa servera
    this.smestajService.dohvatiSmestaje();

    // Pretplata na ažuriranja smeštaja
    this.smestajiSub = this.smestajService.getSmestajiUpdateListener()
      .subscribe((smestaji: Smestaj[]) => {
        this.smestaji = smestaji;
      });
  }


  ngOnDestroy(): void {
    // Odjava od pretplate
    if (this.smestajiSub) {
      this.smestajiSub.unsubscribe();
    }
  }
  obrisiSobu(smestaj: Smestaj): void {
    // Pozovite servis za brisanje sobe
    this.smestajService.obrisiSobu(smestaj.id); // Pretpostavlja se da svaka soba ima svoj jedinstveni ID
  }

  izmeniSobu(smestaj: Smestaj): void {
    this.router.navigate(['/izmena-sobe', smestaj.id]); 
  }
}

