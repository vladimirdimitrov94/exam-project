import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { matchPasswordValidator } from '../../utils/match-passwords.validator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user = {};
  constructor(private http: HttpClient, private router: Router){}

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)
    ]),
    passGroup: new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      rePassword: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    }, {
      validators: [matchPasswordValidator('password', 'rePassword')],
    })
  });


  register(){
    const{
      email,
      passGroup: { password} = {},
    } = this.form.value;
    
    const user = {email, password}
    const body = JSON.stringify(user)
    const url = "https://lightlysystem-us.backendless.app/api/data/Users"

    return this.http.post(url, body).subscribe(() => {
      this.router.navigate(['/login'])
    });

  }
}
