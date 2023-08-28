import { Component } from '@angular/core';
import { tr } from "./../util";
import { Joueur } from "./../modele/joueur";
import { Poker420Service } from '../poker420.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  connexionVisible=true;
  creerCompteVisible=false;
  joueurConnecte:Joueur = new Joueur();
  joueurCandidat:Joueur = new Joueur();

  constructor(private pk420Srv:Poker420Service){}

  creationCompte()
  {
    tr("Création de compte");
  }

  connexion()
  {
    tr("connexion de " + this.joueurCandidat.nom);
  }

  annulerCreationCompte()
  {
    this.connexionVisible=true;
    this.creerCompteVisible=false;
  }
  validerCreationCompte()
  {
    tr("Validation de " + this.joueurCandidat.nom);
    return true;
  }

  afficherTousLesJoueurs()
  {
    this.pk420Srv.getJoueurs().subscribe(
      tabJ => {
        tr(" il y a " + tabJ.length + " joueurs dans la BD", true);
      }
    );
  }
}
