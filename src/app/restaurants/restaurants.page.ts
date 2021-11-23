import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Restaurant } from '../../models/restaurant'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  restaurantsList = [
    {
      name: 'Restaurant 1',
      description: [
        'On mange bien',
        'Homard'
      ]
    },
    {
      name: 'Restaurant 2',
      description: [
        'On mange bien',
        'Homard'
      ]
    },
    {
      name: 'Restaurant 3',
      description: [
        'On mange bien',
        'Homard'
      ]
    }
  ];
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadRestaurant(restaurant: {name: string, description: string[]}) {
    let navigationExtras: NavigationExtras = {
      state: {
        restaurant:restaurant
      }
    };
    this.router.navigate(['/single-restaurant'], navigationExtras);
  }

}
