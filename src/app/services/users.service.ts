import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private baseUrl = 'http://localhost:3000/api/auth';

    constructor(private http: HttpClient, private router: Router) {
    }

    registerUser(user: User) {
        const registerURL = `${this.baseUrl}/register`;
        return this.http.post(registerURL, user);
    }

    login(user: User) {
        const loginURL = `${this.baseUrl}/login`;
        this.getCurrentUser(user).subscribe(result => {
            localStorage.setItem('user', JSON.stringify(result));
            const userStoraged: User =  JSON.parse(localStorage.getItem('user'));
            console.log('from local storedge', userStoraged);
        })
        localStorage.setItem('user', JSON.stringify(user));
        return this.http.post(loginURL, user);
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }

    getToken() {
        return localStorage.getItem('token');
    }

    getCurrentUser(user: User) {
        const registerURL = `${this.baseUrl}/currentUser`;
        return this.http.post(registerURL, user);
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigateByUrl('');
    }

}
