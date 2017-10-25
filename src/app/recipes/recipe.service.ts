import { EventEmitter } from '@angular/core';

import { Recipe } from './recipes.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test',
     'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
