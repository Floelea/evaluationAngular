import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Statistique } from '../models/statistique';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-creer-stats',
  templateUrl: './creer-stats.component.html',
  styleUrls: ['./creer-stats.component.css'],
})
export class CreerStatsComponent implements OnInit {
  titrestat!: string;
  anneestat!: number;
  tauxstat!: number;
  constructor(public singletonStat: StatsService) {}
  validerFormulaire() {
    let nouvelStat = new Statistique(
      this.titrestat,
      this.anneestat,
      this.tauxstat
    );
    this.singletonStat.tabStat.push(nouvelStat);
  }
  ngOnInit(): void {}
}
