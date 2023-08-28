import { Injectable } from '@angular/core';
import { Joueur } from './modele/joueur';
import { urlServeur } from './util';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Poker420Service {

  constructor(private http:HttpClient) { }

  getJoueurs()
  {
    let url = urlServeur + "getJoueurs";
    return this.http.get<Joueur[]>(url);
  }
}
