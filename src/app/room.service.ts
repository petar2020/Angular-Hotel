import { Injectable } from '@angular/core';
import { Smestaj } from './smestaj-lista/smestaj.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  getSmestaji() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getPrice(smestaj: Smestaj, brojNoci: number): number {
    return smestaj.cenaPoNoci * brojNoci;
  }
}