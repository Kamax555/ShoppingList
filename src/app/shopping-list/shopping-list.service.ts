import { NewRecipe } from './NewRecipe.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  newRecipeChanged = new EventEmitter<NewRecipe[]>();
  private newRecipes: NewRecipe[] = [
    new NewRecipe('Apples', 'newapp', 'http://www.madrasmasala.com/admin/img/blog/test'),
    new NewRecipe('Tomatoes', 'new tomatoes', 'http://www.madrasmasala.com/admin/img/blog/test'),
  ];

  getNewRecipes() {
    return this.newRecipes.slice();
  }

  addNewRecipes(ingredient: NewRecipe) {
    this.newRecipes.push(ingredient);
    this.newRecipeChanged.emit(this.newRecipes.slice());
  }
}
