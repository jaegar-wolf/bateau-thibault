import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Produits } from 'src/models/produits';
import { BateauThibaultService } from 'src/services/bateau-thibault.service';

@Component({
  selector: 'app-prod-prom',
  templateUrl: './prod-prom.page.html',
  styleUrls: ['./prod-prom.page.scss'],
})
export class ProdPromPage implements OnInit {

 produitsList: Produits[];

  constructor(private router: Router, private bateauThibaultService: BateauThibaultService) { }

  ngOnInit() {
    this.bateauThibaultService.getProduct().subscribe(res => {
      this.produitsList = res;
    },
    err => {
      console.log("error")
    }
    );

  }
  onLoadProduit(produit: Produits[]) {
    let navigationExtras: NavigationExtras = {
      state: {
        produit:produit
      }
    };
    console.log(produit);
    this.router.navigate(['/single-produit'], navigationExtras);
  }
}
