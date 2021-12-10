export class Statistique {
  nom: string;
  annee: number;
  taux: number;
  constructor(nom: string, taux: number, annee: number) {
    this.nom = nom;
    this.annee = annee;
    this.taux = taux;
  }
}
