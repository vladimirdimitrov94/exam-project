import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { matchPasswordValidator } from '../../utils/match-passwords.validator';
import { UserService } from '../user.service';
import { MatButtonModule } from '@angular/material/button';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errorMessage: string | null = null;

  constructor(private userService: UserService, private router: Router) { }

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


  register() {


    const { username, email, passGroup: { password } = {} } = this.form.value

    this.userService.register(email!, password!, username!).pipe(
      catchError(err => {
        this.errorMessage = err.error?.message
        return throwError(() => err)
      })
    ).subscribe({
      next: () => {
        this.errorMessage = null;
        this.router.navigate(['/home'])
        this.userService.login(email!, password!)
      },
      error: () => {
      }
    });
  }
}


