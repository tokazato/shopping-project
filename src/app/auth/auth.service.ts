import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipe/recipe.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})

export class AuthService {
    catchLogin = new Subject()
    constructor(
        private httpClient: HttpClient,
        private recipeService: RecipeService,
        private router: Router) {}

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
            this.recipeService.token = siginrespo.idToken
            this.catchLogin.next(true)
            localStorage.setItem('token', this.recipeService.token)
            this.router.navigate(['recipe'])
        },
        (err) => {
            console.log(err)
        }
        )
    }
}