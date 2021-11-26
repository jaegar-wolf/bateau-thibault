import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produits } from 'src/models/produits';
import { BateauThibaultService } from 'src/services/bateau-thibault.service';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-coquillages',
  templateUrl: './coquillages.page.html',
  styleUrls: ['./coquillages.page.scss'],
})
export class CoquillagesPage implements OnInit {
  produitsList: Produits[];

  constructor(private router: Router, private bateauThibaultService: BateauThibaultService, private storage: StorageService) { }

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
