import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable()

export class AuthService {
    authChange= new Subject<boolean>();
    private user: User;

    constructor(private router: Router) {}

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000 )
        };

        this.authSuccess()
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000 )
        };

        this.authSuccess()
    }

    logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login'])
    }

    getUser() {
        //to return a new object so the original user cannot be manipulated outside
        return {...this.user}
    }

    isAuth() {
        return this.user
    }

    private authSuccess() {
        this.authChange.next(true);
        this.router.navigate(['/training'])
    }
}