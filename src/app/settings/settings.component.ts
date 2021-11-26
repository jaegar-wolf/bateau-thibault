import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  validerPanier(){
    this.alertCtrl.create({
      header: "Votre panier est validé !",
      subHeader: "Vous allez être redirigé vers la page de paiement dans quelques instants"
    }).then(res => {

      res.present();
    })
  }


  ngOnInit() {}

}
