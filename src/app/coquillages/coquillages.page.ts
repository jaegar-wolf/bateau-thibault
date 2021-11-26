import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produits } from 'src/models/produits';
import { BateauThibaultService } from 'src/services/bateau-thibault.service';
import { StorageService } from 'src/services/storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-coquillages',
  templateUrl: './coquillages.page.html',
  styleUrls: ['./coquillages.page.scss'],
})
export class CoquillagesPage implements OnInit {
  produitsList: Produits[];

  constructor(private router: Router, private bateauThibaultService: BateauThibaultService, private storage: StorageService, private toastCtrl: ToastController) { }

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
    this.openToast(produit)
    this.storage.set(id, produit);
  }

  goToPanier(){
    this.router.navigate(['/panier']);
  }

  async openToast(produit: Produits){
    const toast = await this.toastCtrl.create({  
      message: "Ajouté au panier.",   
      position: "bottom",
      duration: 1000
    });  
    toast.present();
    toast.onDidDismiss().then((val) => {  
        console.log('Toast Dismissed');   
    }); 
  }

}
