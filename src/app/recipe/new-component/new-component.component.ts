import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {
  formRecipe: FormGroup;
  editRecipe = false;
  currentRecipesId: number;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((para: Params) => {
      this.currentRecipesId = +para['id']
      this.editRecipe = (para['id'] != null);
      this.initForm()
    })
   
  }

  addIngredent() {
    (<FormArray>this.formRecipe.get('ingredients')).push(
      new FormGroup({
        ingred_name: new FormControl(null, Validators.required),
        ingred__number: new FormControl(null, Validators.required)
      })
    )
  }

  deleteIngredient(index: number) {
    (<FormArray>this.formRecipe.get('ingredients')).removeAt(index)
  }

  cancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onSubmit(form: FormGroup) {
    console.log(form)
    if(this.editRecipe) {

      this.recipeService.recipes[this.currentRecipesId] = this.formRecipe.value

      this.router.navigate(['../'], {relativeTo: this.route})

    } else {

      this.recipeService.addrecipe(this.formRecipe.value)

      this.router.navigate(['../'], {relativeTo: this.route})

    }
  }

  initForm() {
    let newRecipeName = '';
    let newRecipeImg = '';
    let newRecipeDesc = '';
    let newRecipeIngredient = new FormArray([]);

    if(this.editRecipe) {
      let currentEditRecipe = this.recipeService.recipesi(this.currentRecipesId);
      newRecipeName = currentEditRecipe.name;
      newRecipeImg = currentEditRecipe.img;
      newRecipeDesc = currentEditRecipe.description;
      if( currentEditRecipe['ingredients'] ) {
        for(let ingred of currentEditRecipe.ingredients) {
            newRecipeIngredient.push(
              new FormGroup({
                ingred_name: new FormControl( ingred.ingred_name , Validators.required),
                ingred__number: new FormControl( ingred.ingred__number , Validators.required),
              })
            )
        }
      }
    }

    this.formRecipe = new FormGroup({
      'name': new FormControl(newRecipeName, Validators.required),
      'img': new FormControl(newRecipeImg, Validators.required),
      'description': new FormControl(newRecipeDesc, Validators.required),
      'ingredients': newRecipeIngredient
    })
    console.log('init', this.formRecipe.value)

    


    
  }

}
