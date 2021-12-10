import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-une-stat',
  templateUrl: './une-stat.component.html',
  styleUrls: ['./une-stat.component.css'],
})
export class UneStatComponent implements OnInit {
  @Input() public uneStat!: Statistique;
  @Output() deleteMe = new EventEmitter();

  constructor() {}
  reagitAuClic() {
    this.deleteMe.emit();
  }
  ngOnInit(): void {}
}
