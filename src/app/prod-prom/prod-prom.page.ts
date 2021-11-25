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

  constructor(private router: Router) { }

  onGoToCrustaces(){
    this.router.navigate(['/crustaces']);
    
 
   }
  onGoToPoissons(){
    this.router.navigate(['/poissons']);

  }

  

  onGoToCoquilllages(){
    this.router.navigate(['/coquillages']);
    
 }
 
 onGoToPromotion(){
  this.router.navigate(['/promotion']);
}
ngOnInit() {  
}

  
}
