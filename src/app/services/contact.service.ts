import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../models/email.model';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(private http: HttpClient) { }

    sendMail(name, email, phone, message) {
        const url = 'http://localhost:3000/api/contact/send';
        const emailData = {
            name,
            email,
            phone,
            message,
        };
        return this.http.post(url, emailData, { observe: 'response' });
    }

}
