import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';
import { Cocktail } from '../../types/cokctail';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [LoaderComponent, RouterLink, LoaderComponent, MatCardModule, MatPaginatorModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit {
  cocktails: Cocktail[] = []
  pagedCocktails: Cocktail[] = []
  isLoading = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAll().subscribe(c => {
      this.cocktails = c
      this.cocktails.sort((a, b) => b.created - a.created)
      this.pagedCocktails = this.cocktails.slice(0, 5)
    })

    this.isLoading = false
  }

  onPageChange(event: any) {

    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;

    this.apiService.getAll().subscribe(c => {
      console.log(startIndex);
      console.log(endIndex);

      this.pagedCocktails = c.sort((a, b) => b.created - a.created).slice(startIndex, endIndex)
      console.log(this.pagedCocktails);

    })

  }
}
