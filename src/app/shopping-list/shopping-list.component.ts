import { Component, OnInit } from '@angular/core';
import { NewRecipe } from './NewRecipe.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {
  newRecipes: NewRecipe[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.newRecipes = this.slService.getNewRecipes();
    this.slService.newRecipeChanged
      .subscribe(
        (newRecipes: NewRecipe[]) => {
          this.newRecipes = newRecipes;
        }
      );
  }

}
