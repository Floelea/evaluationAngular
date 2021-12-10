import { Component, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';
import { StatsService } from '../stats.service';
@Component({
  selector: 'app-liste-stats',
  templateUrl: './liste-stats.component.html',
  styleUrls: ['./liste-stats.component.css'],
})
export class ListeStatsComponent implements OnInit {
  tabStat: Statistique[] = [];
  constructor(public singletonStat: StatsService) {
    this.tabStat = this.singletonStat.tabStat;
  }

  supprimer(uneStat: Statistique) {
    let index = this.tabStat.indexOf(uneStat);
    this.tabStat.splice(index, 1);
  }
  ngOnInit(): void {}
}
