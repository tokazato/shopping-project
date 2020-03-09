import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RecipeService } from '../recipe/recipe.service';
import { map, exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  recipes;


  constructor( 
    private httpClient: HttpClient,
    private recipeService: RecipeService  ) { }

  ngOnInit() {
  }

  saveRecipeToData() {
    this.recipes = this.recipeService.recipes;
    console.log(this.recipes)
    this.httpClient.put('https://shopping-f063d.firebaseio.com/recipes-box.json', this.recipes).subscribe(respo => {
      console.log(respo)
    })
  }

  fetchRecipe() {
    this.httpClient.get('https://shopping-f063d.firebaseio.com/recipes-box.json').subscribe(para => {
    let ragaa;
    ragaa = para;  
    for(let item of ragaa){
      this.recipeService.recipes.push(item)
      }
    })
    
  }

}
