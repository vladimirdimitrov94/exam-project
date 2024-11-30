import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router) { }

  login(form: NgForm) {
    const url = "https://api.backendless.com/4D2A8539-DF52-4239-AABA-8BCDFE9BF391/4425D43C-344E-43B3-A811-D68B92E6010F/users/login";
    const user = {
      login: form.value.email,
      password: form.value.password
    }
    const body = JSON.stringify(user);

    this.http.post(url, body).subscribe((r) => {
    console.log(r);
    })
    this.router.navigate(['/home'])
  }
}
