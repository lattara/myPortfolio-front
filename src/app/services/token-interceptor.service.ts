import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private usersService: UsersService) { }

  intercept(req, next) {
    // makes clone of the request
    const tokenizedReq = req.clone({
      setHeaders: {
        // set token in headers
        Authorization: `Bearer ${this.usersService.getToken()}` // creates Bearer convention token
      }
    });
    // return modified req with token inside
    return next.handle(tokenizedReq);
  }
}
