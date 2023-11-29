import { Injectable } from '@angular/core';
import { Smestaj } from './smestaj-lista/smestaj.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  getPrice(smestaj: Smestaj, brojNoci: number): number {
    return smestaj.cenaPoNoci * brojNoci;
  }
}