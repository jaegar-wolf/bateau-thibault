import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {

  bateauxList = [
    {
      name: 'Bateau 1',
      description: [
        'Beau bateau',
        'Rapide'
      ]
    },
    {
      name: 'Bateau 2',
      description: [
        'Beau bateau',
        'Rapide'
      ]
    },
    {
      name: 'Bateau 3',
      description: [
        'Beau bateau',
        'Rapide'
      ]
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadBateau(bateau: {name: string, description: string[]}) {
    let navigationExtras: NavigationExtras = {
      state: {
        bateau:bateau
      }
    };
    this.router.navigate(['/single-bateau'], navigationExtras);
  }

}
