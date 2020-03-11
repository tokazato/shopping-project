import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { exhaustMap, map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class RecipeService {
    selectIngredi = []
    token = '';
    newingredebi = new Subject()
    recipes 
    = [
        // {
        //     name: "pirveli kerdzi",
        //     description: 'description pirveli sauketeso kerdzi',
        //     img: 'https://pluspng.com/img-png/salad-hd-png-greek-salad-png-image-42826-salad-png-427.png',
        //     ingredients: [
        //         { 
        //             ingred_name: 'vashli',
        //             ingred__number: 10 
        //         },
        //         { 
        //             ingred_name: 'msxali',
        //             ingred__number: 20 
        //         },
        //     ]
        // },
        // {
        //     name: "meore kerdzi",
        //     description: 'description meore',
        //     img: 'https://img.freepik.com/free-photo/salad-tomatoes-cucumber-red-onions-lettuce-leaves_2829-1732.jpg?size=626&ext=jpg',
        //     ingredients: [
        //         { 
        //             ingred_name: 'atami',
        //             ingred__number: 6 
        //         },
        //         { 
        //             ingred_name: 'jolo',
        //             ingred__number: 9 
        //         },
        //     ]
        // },
    ];

    constructor(private httpClient: HttpClient) {}

    getRecipe(recip) {
        this.recipes = recip
        return this.recipes
    }

    recipesi(index) {
        return this.recipes[index];
    }

    addrecipe(recipe) {
        this.recipes.push(recipe)
    }

    

    deleteItem(index) {
        this.recipes.splice(index, 1)
    }

    getIngredients(index) {
        let saveingred = this.recipes[index].ingredients
        for(let item of saveingred) {
            let name = item.ingred_name;
            let numb = item.ingred__number;
            let obj = {}
            obj[name] = numb
            this.selectIngredi.push(obj)
        }
        // this.selectIngredi = {}
        // this.selectIngredi[name] = numb
        
        console.log(saveingred)
        console.log(this.selectIngredi)
    }

    // fetchRecipe() {
    //     return this.httpClient.get('https://shopping-f063d.firebaseio.com/recipes-box.json')
    //   }



}