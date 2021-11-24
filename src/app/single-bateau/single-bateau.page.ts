import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bateau } from 'src/models/bateau';

@Component({
  selector: 'app-single-bateau',
  templateUrl: './single-bateau.page.html',
  styleUrls: ['./single-bateau.page.scss'],
})
export class SingleBateauPage implements OnInit {
  bateau: Bateau[];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.bateau = this.router.getCurrentNavigation().extras.state.bateau;
        console.log(this.bateau);
      }
    });

   }
  ngOnInit() {
  }

}
