import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Education } from '../models/education';

@Injectable({
    providedIn: 'root'
})
export class EducationService {

    private baseUrl = 'http://localhost:3000/api/education';

    constructor(private http: HttpClient, private router: Router) {
    }

    getEducations(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }

    putEducation(education: Education, id: number): Observable<any> {
        const putEducationURL = `${this.baseUrl}/${id}`;
        return this.http.put(putEducationURL, education);
    }

    postEducation(education: Education): Observable<any> {
        return this.http.post(`${this.baseUrl}`, education);
    }

    deleteEducation(id: number): Observable<any> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url);
    }

    getEducationById(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

}
