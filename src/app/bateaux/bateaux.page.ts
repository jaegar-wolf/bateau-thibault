import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Bateau } from 'src/models/bateau';
import { BateauThibaultService } from 'src/services/bateau-thibault.service';


@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {

  bateauxList: Bateau[];

  constructor(private router: Router, private bateauThibaultService: BateauThibaultService) { }

  ngOnInit() {
    this.bateauThibaultService.getBateaux().subscribe(res => {
      this.bateauxList = res;
    },
    err => {
      console.log("error")
    }
    );

  }
  onLoadBateau(bateau: Bateau[]) {
    let navigationExtras: NavigationExtras = {
      state: {
        bateau:bateau
      }
    };
    console.log(bateau);
    this.router.navigate(['/single-bateau'], navigationExtras);
  }
}
