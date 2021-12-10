import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tabStat: Statistique[] = [];
  vaccination = new Statistique('Nombre de personne vaccine', 2021, 80);
  bitcoin = new Statistique('Augmentation cours Bitcoin', 2021, 15);

  constructor() {
    this.tabStat.push(this.vaccination, this.bitcoin);
  }
  supprimer(uneStat: Statistique) {
    let index = this.tabStat.indexOf(uneStat);
    this.tabStat.splice(index, 1);
  }
}
