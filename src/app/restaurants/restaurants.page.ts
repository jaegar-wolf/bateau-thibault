import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Restaurant } from '../../models/restaurant';
import { BateauThibaultService } from 'src/services/bateau-thibault.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  
  restaurantsList: Restaurant[]
  
  constructor(private router: Router, private bateauThibaultService: BateauThibaultService) { }

  ngOnInit() {
    this.bateauThibaultService.getRestaurant().subscribe(res => {
      this.restaurantsList = res;
    },
    err => {
      console.log("error")
    }
    );

  }

  onLoadRestaurant(restaurant: Restaurant[]) {
    let navigationExtras: NavigationExtras = {
      state: {
        restaurant:restaurant
      }
    };
    this.router.navigate(['/single-restaurant'], navigationExtras);
  }

}
