import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (private recipeserv: RecipeService) {}

  ngOnInit() {
    this.recipeserv.getToken()
  }

}
