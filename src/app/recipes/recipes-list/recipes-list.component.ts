import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  providers: [RecipeService]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
     this.recipeService.getRecipes()
     .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
     );
  }


}
