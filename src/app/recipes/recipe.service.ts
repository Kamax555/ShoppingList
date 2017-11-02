import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

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

  deleteRecipe(recipe: Recipe) {

    console.log(recipe.id);
 //   this.recipes.splice(this.recipes.indexOf(recipe), 1);
    return this._http.delete(`/api/recipes/${recipe.id}`).subscribe(
      (res: Response) => console.log(res),
      (error) => console.log(error));
     }

}


