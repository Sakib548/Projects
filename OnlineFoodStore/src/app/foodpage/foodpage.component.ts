import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {

  food!: Food;

  ngOnInit(): void{
    
  }  
  constructor(private activatedRoute: ActivatedRoute
  ,private foodService:FoodService,private cartService:CartService,private router:Router) {
    activatedRoute.params.subscribe((params)=> {
      if (params['id']) {
        this.food = foodService.getFoodById(params['id'])
        console.log(this.food)
       }
    })
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
