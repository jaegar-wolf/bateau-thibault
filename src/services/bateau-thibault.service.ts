import { Injectable } from '@angular/core';
import { Produits } from 'src/models/produits';
import { Bateau } from 'src/models/bateau';
import { Recette } from 'src/models/recette';
import { Restaurant } from 'src/models/restaurant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BateauThibaultService {

  produits: Produits[];
  bateaux: Bateau[];
  recettes: Recette[];
  restaurants: Restaurant[];

  constructor(private http : HttpClient) { }

  getBateaux():Observable<Bateau[]>{
    return this.http.get<Bateau[]>('assets/data/all.json');
  }
}
