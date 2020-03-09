import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class AuthService {
    constructor(private httpClient: HttpClient) {}

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
        ).subscribe(siginrespo => {
            console.log(siginrespo)
        })
    }
}