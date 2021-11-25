import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produits } from 'src/models/produits';
import { BateauThibaultService } from 'src/services/bateau-thibault.service';

@Component({
  selector: 'app-crustaces',
  templateUrl: './crustaces.page.html',
  styleUrls: ['./crustaces.page.scss'],
})
export class CrustacesPage implements OnInit {
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

}
