import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {
  formRecipe: FormGroup;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm()
  }

  addIngredent() {
    (<FormArray>this.formRecipe.get('ingredients')).push(
      new FormGroup({
        'ingred_name': new FormControl(null, Validators.required),
        'ingred__number': new FormControl(null, Validators.required)
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
    this.recipeService.addrecipe(form.value)
    console.log(this.formRecipe.value)
  }

  initForm() {
    let newRecipeName = '';
    let newRecipeImg = '';
    let newRecipeDesc = '';
    let newRecipeIngredient = new FormArray([]);

    this.formRecipe = new FormGroup({
      'name': new FormControl(newRecipeName, Validators.required),
      'img': new FormControl(newRecipeImg, Validators.required),
      'description': new FormControl(newRecipeDesc, Validators.required),
      'ingredients': newRecipeIngredient
    })

    


    
  }

}
