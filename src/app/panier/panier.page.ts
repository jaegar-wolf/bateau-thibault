import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Produits } from 'src/models/produits';
import { StorageService } from 'src/services/storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  produits: Produits[];
  vide: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storage: StorageService,
    private toastCtrl: ToastController
  ) {
    this.produits = [];
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.router.url === '/panier') {
        this.produits = this.route.snapshot.data.produits;
      }
    });
   }

  async ngOnInit() {
    this.produits = await this.storage.getAll()
    if(this.produits.length == 0) {
      this.vide = true;
    }
  }

  async removeFromPanier(id: string, produit: Produits){
    this.storage.del(id);
    this.openToast(produit);
    this.produits = await this.storage.getAll();
    if(this.produits.length == 0) {
      this.vide = true;
    }     
  }

  async openToast(produit: Produits){
    const toast = await this.toastCtrl.create({  
      message: "Ce produit qui n'a pas de nom a bien été supprimé.",   
      position: "bottom",
      duration: 2000
    });  
    toast.present();
    toast.onDidDismiss().then((val) => {  
        console.log('Toast Dismissed');   
    });  
  }
}
  
