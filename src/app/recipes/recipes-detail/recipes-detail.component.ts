import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  ondeleted() {
    this.recipeService.deleteRecipe(this.recipe);
        //.subscribe(
          //result => console.log(result)
        //);
  }

  reloadPage() {
    location.reload();
  }

}
