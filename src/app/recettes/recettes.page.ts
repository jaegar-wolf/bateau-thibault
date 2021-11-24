import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Recette } from 'src/models/recette';
import { BateauThibaultService } from 'src/services/bateau-thibault.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {

  recettesList: Recette[];

  constructor(private router: Router, private bateauThibaultService: BateauThibaultService) { }

  ngOnInit() {
    this.bateauThibaultService.getRecette().subscribe(res => {
      this.recettesList = res;
    },
    err => {
      console.log("error")
    }
    );

  }
  onLoadRecette(recette: Recette[]) {
    let navigationExtras: NavigationExtras = {
      state: {
        recette:recette
      }
    };
    console.log(recette);
    this.router.navigate(['/single-recette'], navigationExtras);
  }

}
