import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Bio } from '../models/bio.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class BioService {

    private baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient, private router: Router) {
    }

    getBio(): Observable<any> {
        return from(this.http.get('http://localhost:3000/api/bio'));
    }

    putBio(bio: Bio, id: number): Observable<any> {
        const putBioURL = `${this.baseUrl}/bio/`;
        console.log(putBioURL);
        return this.http.put(putBioURL, bio);
    }

    postBio(bio: Bio): Observable<any> {
        return this.http.post(`${this.baseUrl}/bio`, bio);
    }

    deleteBio(id: number): Observable<any> {
        const url = `${this.baseUrl}/bio`;
        return this.http.delete(url);
    }

}
