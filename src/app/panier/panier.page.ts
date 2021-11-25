import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Produits } from 'src/models/produits';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  produits: Produits[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storage: StorageService
  ) {
    this.produits = [];
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.router.url === '/panier') {
        this.produits = this.route.snapshot.data.produits;
      }
    });
   }

  ngOnInit() {
    this.produits = this.route.snapshot.data.produits;
  }

  afficher(){
    //return this.storage.get(this.produit);
  }
}
