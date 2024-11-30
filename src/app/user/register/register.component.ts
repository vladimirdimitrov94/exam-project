import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { matchPasswordValidator } from '../../utils/match-passwords.validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

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
    const { username, email, passGroup: { password, rePassword } = {} } = this.form.value
    this.userService.register(email!, password!, username!).subscribe(() => {
      this.router.navigate(['/home'])
      this.userService.login(email!, password!)
    });
    
  }
}
