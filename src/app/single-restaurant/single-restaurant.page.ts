import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-restaurant',
  templateUrl: './single-restaurant.page.html',
  styleUrls: ['./single-restaurant.page.scss'],
})
export class SingleRestaurantPage implements OnInit {

  restaurantName: any;
  restaurant: {
    name: string,
    description: string[]
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.restaurant = this.router.getCurrentNavigation().extras.state.restaurant;
        console.log(this.restaurant);
      }
    });

   }

  ngOnInit() {
  }

}
