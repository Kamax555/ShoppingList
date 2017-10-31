import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[]= [];

  constructor(private _http: Http) { }
  getRecipes() {
    return this._http.get('/api/recipes')
           .map (response => {
               const recipes = response.json();
               let transformedRecipe: Recipe[] = [];
               for (let recipe of recipes){
                  transformedRecipe.push(new Recipe(recipe._id, recipe.name, recipe.description, recipe.img));
               }
               this.recipes = transformedRecipe;
               return transformedRecipe;
           });
          // .catch((error: Response) => Observable.throw (error.json()));
  }
}
