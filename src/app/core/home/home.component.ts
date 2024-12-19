import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cocktail } from '../../types/cokctail';
import { ApiService } from '../../api.service';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoaderComponent, RouterLink, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  isLoading = true;
  cocktails: Cocktail[] = [];

  constructor(private apiService: ApiService, private userService: UserService) {

    this.apiService.getAll().subscribe(c => {
      this.cocktails = c.sort((a, b) => Number(b.created) - Number(a.created)).slice(0, 3)
    })
  }
}

