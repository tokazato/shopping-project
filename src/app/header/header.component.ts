import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RecipeService } from '../recipe/recipe.service';
import { map, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin = false;
  recipes;
  token: string = null;


  constructor( 
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authRecipes: AuthService  ) { }

    ngOnInit() {
      // this.isLogin = this.authRecipes.isLogin
      this.authRecipes.catchLogin.subscribe((rat: boolean) => {
        this.isLogin = rat
      })
  }

  saveRecipeToData() {
    this.token = this.recipeService.token;
    this.recipes = this.recipeService.recipes;
    console.log(this.recipes)
    this.httpClient.put('https://shopping-f063d.firebaseio.com/recipes-box.json?auth=' + this.token, this.recipes).subscribe(respo => {
      console.log(respo)
    })
  }

  fetchRecipe() {
    this.token = this.recipeService.token;
    console.log(this.token)
    this.httpClient.get('https://shopping-f063d.firebaseio.com/recipes-box.json?auth=' + this.token).subscribe(para => {
    let ragaa;
    ragaa = para;  
    for(let item of ragaa){
      this.recipeService.recipes.push(item)
      }
    })
    
  }

}
