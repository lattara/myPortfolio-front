import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = new FormGroup({
    identifiant: new FormControl(),
    password: new FormControl('', Validators.required),
  });

  constructor(private loginService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    const user = this.loginUserData.value;
    this.loginService.login(user).subscribe(
      result => {
        const token = result['token'];
        localStorage.setItem('token', token);
        this.router.navigateByUrl('/dashboard');
      },
      err => {
          Swal.fire(err.error);
      });
    }


}
