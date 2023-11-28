import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SmestajService } from '../smestaj.service'; 
import { Smestaj } from './smestaj.model';

@Component({
  selector: 'app-smestaj-lista',
  templateUrl: './smestaj-lista.component.html',
  styleUrls: ['./smestaj-lista.component.css']
})
export class SmestajListaComponent implements OnInit, OnDestroy {
  smestaji: Smestaj[] = [];
  private smestajiSub: Subscription | undefined;

  constructor(private smestajService: SmestajService) { }

  ngOnInit(): void {
    this.smestaji = this.smestajService.getSmestaji();
    this.smestajiSub = this.smestajService.getSmestajiUpdateListener()
      .subscribe((smestaji: Smestaj[]) => {
        this.smestaji = smestaji;
      });
  }

  ngOnDestroy(): void {
    if (this.smestajiSub) {
      this.smestajiSub.unsubscribe();
    }
  }
}
