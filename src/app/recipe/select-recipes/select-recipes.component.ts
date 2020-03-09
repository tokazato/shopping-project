import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-select-recipes',
  templateUrl: './select-recipes.component.html',
  styleUrls: ['./select-recipes.component.scss']
})
export class SelectRecipesComponent implements OnInit {
  istrue = false;
  currentparam: any;
  selectedRecipe;
  constructor(
    private recipeServer: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    // this.currentparam = this.route.snapshot.paramMap.get("animal")
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.currentparam = params.get('id')
    //   console.log(this.currentparam)
    // })

    this.activatedRoute.params.subscribe(para => {
      this.currentparam = para['id']
      this.selectedRecipe = this.recipeServer.recipes[this.currentparam]
    })
  }

  dropdown() {
    this.istrue = !this.istrue;
  }

  deleteRecipes() {
    this.recipeServer.deleteItem(this.currentparam);
    this.router.navigate(['recipe'])
  }

  editRecipes() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute})
  }

  addToShoping() {
    this.recipeServer.getIngredients(this.currentparam)
  }

}
