import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';
import { Cocktail } from '../../types/cokctail';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [LoaderComponent, RouterLink, LoaderComponent],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit {
  cocktails: Cocktail[] = []
  isLoading = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAll().subscribe(c =>
      this.cocktails = c)
    this.isLoading = false
  }
}
