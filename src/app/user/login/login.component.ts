import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { catchError, throwError } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  errorMessage: string | null = null;
   

  constructor(private userService: UserService, private router: Router) { }

  login(form: NgForm) {

      if (form.invalid) {
        return;
      }
      const {email, password} = form.value
      
      this.userService.login(email, password).pipe(
        catchError(err => {
          this.errorMessage = err.error?.message
          return throwError(() => err)
        })
      ).subscribe({
        next: () => {
          this.errorMessage = null;
          this.router.navigate(['/home']);
        },
        error: () => {
        }
      });
    }
  }