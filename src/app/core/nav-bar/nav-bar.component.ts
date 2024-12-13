import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';
import { User } from '../../types/user';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  user: User | null = null

  get isLogged(): boolean {
    return this.userService.isLogged
  }

  get userName(): string {
    return this.userService.user?.username || ''
  }

  constructor(private userService: UserService, private router: Router) { }

  logout() {

    this.userService.logout();
    this.router.navigate(['/home'])
  }
}
