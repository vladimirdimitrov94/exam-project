import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cocktail } from '../../types/cokctail';
import { ApiService } from '../../api.service';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoaderComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLoading = true;
  cocktails: Cocktail[] = [];

  constructor(private apiService: ApiService) {

    this.apiService.getAll().subscribe(c => {
      this.cocktails = c.sort((a, b) => b.created - a.created).slice(0, 3)
    })

  }
}
