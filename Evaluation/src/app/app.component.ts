import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  vaccination = new Statistique('Nombre de personne vaccine', 2021, 80);
  bitcoin = new Statistique('Augmentation cours Bitcoin', 2021, 15);
}
