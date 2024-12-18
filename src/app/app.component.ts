import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { FooterComponent } from "./core/footer/footer.component";
import { UserService } from './user/user.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'exam-project';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.restoreSession();
  }
}