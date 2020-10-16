import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {

    private baseUrl = 'http://localhost:3000/api/experience';

    constructor(private http: HttpClient, private router: Router) {
    }

    getExperiences(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }

    postExperience(experience: Experience): Observable<any> {
        return this.http.post(`${this.baseUrl}`, experience);
    }

    getExperienceById(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    deleteExperience(experienceId: number): Observable<any> {
        const url = `${this.baseUrl}/${experienceId}`;
        return this.http.delete(url);
    }

}
