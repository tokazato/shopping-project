import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class RecipeService {
    recipes = [
        {
            name: "pirveli kerdzi",
            description: 'description pirveli sauketeso kerdzi',
            img: 'https://pluspng.com/img-png/salad-hd-png-greek-salad-png-image-42826-salad-png-427.png',
            ingredients: [
                { 
                    ingred_name: 'vashli',
                    ingred__number: 10 
                },
                { 
                    ingred_name: 'msxali',
                    ingred__number: 20 
                },
            ]
        },
        {
            name: "meore kerdzi",
            description: 'description meore',
            img: 'https://img.freepik.com/free-photo/salad-tomatoes-cucumber-red-onions-lettuce-leaves_2829-1732.jpg?size=626&ext=jpg',
            ingredients: [
                { 
                    ingred_name: 'atami',
                    ingred__number: 6 
                },
                { 
                    ingred_name: 'jolo',
                    ingred__number: 9 
                },
            ]
        },
        // {
        //     name: "mesame kerdzi",
        //     description: 'description mesame',
        //     img: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F2019-06-Cookie-Salad%2FIMG_2640',
        //     ingredients: [
        //         { 'marwyvi': 15 },
        //         { 'banani': 30 }
        //     ]
        // }
    ];

    recipesi(index) {
        return this.recipes[index];
    }

    addrecipe(recipe) {
        this.recipes.push(recipe)
    }

    // getNewRecipe(name: string, description: string, img: string, ingredients: []) {
    //     this.recipes.push({
    //         name: name,
    //         description: description,
    //         img: img,
    //         ingredients: ingredients
    //     })
    // }

    deleteItem(index) {
        this.recipes.splice(index, 1)
    }
}