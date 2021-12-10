import { Injectable } from '@angular/core';
import { Statistique } from './models/statistique';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  tabStat: Statistique[] = [];
  constructor() {
    let vaccination = new Statistique('Nombre de personne vaccine', 2021, 80);
    let bitcoin = new Statistique('Augmentation cours Bitcoin', 2021, 15);
    this.tabStat.push(vaccination, bitcoin);
  }
}
