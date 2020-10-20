import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { GitHubService } from './git-hub.service';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private baseUrl = 'http://188.166.59.10:3000/api/auth';

    constructor(private http: HttpClient, private router: Router, private githubService: GitHubService) {
    }

    registerUser(user: User) {
        const registerURL = `${this.baseUrl}/register`;
        return this.http.post(registerURL, user);
    }

    login(user: User) {
        const loginURL = `${this.baseUrl}/login`;
        this.getCurrentUser(user).subscribe(result => {
            localStorage.setItem('user', JSON.stringify(result));
            const userStoraged: User = JSON.parse(localStorage.getItem('user'));
        });
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
        this.getGitToken();
        this.router.navigateByUrl('');
    }

    getGitToken() {
        this.githubService.getAccess().subscribe(resp => {
            const extractTKN: any = Object.values(resp);
            localStorage.setItem('token', extractTKN);
        });
        this.githubService.getAccess()
    }
}