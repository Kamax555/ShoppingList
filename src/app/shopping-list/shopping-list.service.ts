import { Injectable } from '@angular/core';
import { NewRecipe } from './NewRecipe.model';
import { EventEmitter } from '@angular/core';

import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShoppingListService {
  constructor(private _http: Http) {}
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
    let headers = new Headers({'Content-Type': 'application/json'});
   let options = new RequestOptions({headers: headers});
   return this._http.post('/api/recipes', JSON.stringify(ingredient), options).subscribe(
     (res: Response) => console.log(res),
     (error) => console.log(error));
    }
}

