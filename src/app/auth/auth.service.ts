import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipe/recipe.service';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class AuthService {
    catchLogin = new Subject()
    constructor(
        private httpClient: HttpClient,
        private recipeService: RecipeService) {}

    signUp(email: string, pass: string) {
        this.httpClient.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDSa8Ct3x7HIC2ejoxNm2XsSDoNIotFAn8', 
        {
            email: email,
            password: pass,
            returnSecureToken: true
        }
        ).subscribe(respo => {
            console.log(respo)
        })
    }

    signIn(email: string, pass: string) {
        this.httpClient.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDSa8Ct3x7HIC2ejoxNm2XsSDoNIotFAn8',
        {
            email: email,
            password: pass,
            returnSecureToken: true
        }
        ).subscribe((siginrespo: any) => {
            console.log(siginrespo)
            this.recipeService.token = siginrespo.idToken
            console.log(this.recipeService.token)
            this.catchLogin.next(true)
            localStorage.setItem('token', this.recipeService.token)
            this.recipeService.token = localStorage.getItem('token')
            console.log('111111111111111111', this.recipeService.token)
        },
        (err) => {
            console.log(err)
        }
        )
    }
}