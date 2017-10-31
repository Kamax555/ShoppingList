import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { NewRecipe } from '../NewRecipe.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('desInput') desInputRef: ElementRef;
  @ViewChild('imgInput') imgInputRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingDes = this.desInputRef.nativeElement.value;
    const ingImg = this.imgInputRef.nativeElement.value;
    const newRecipeModel = new NewRecipe(ingName, ingDes, ingImg);
    this.slService.addNewRecipes(newRecipeModel);
  }

}
