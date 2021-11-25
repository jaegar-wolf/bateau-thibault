import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produits } from 'src/models/produits';
import { BateauThibaultService } from 'src/services/bateau-thibault.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-poissons',
  templateUrl: './poissons.page.html',
  styleUrls: ['./poissons.page.scss'],
})
export class PoissonsPage implements OnInit {
  produitsList: Produits[];
  produit: Produits[];

  constructor(private router: Router, private bateauThibaultService: BateauThibaultService, private storage: Storage) { }

  ngOnInit() {
    this.bateauThibaultService.getProduct().subscribe(res => {
      this.produitsList = res;
    },
    err => {
      console.log("error")
    }
    );

  }

  saveToPanier(id: string, produit: Produits){
    console.log(produit);
    this.storage.set(id, produit);
  }

  goToPanier(){
    this.router.navigate(['/panier']);
  }
}