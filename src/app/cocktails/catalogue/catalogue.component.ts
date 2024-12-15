import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';
import { Cocktail } from '../../types/cokctail';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [LoaderComponent, RouterLink, LoaderComponent, MatCardModule, MatPaginatorModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  cocktails: Cocktail[] = []
  pagedCocktails: Cocktail[] = []
  isLoading = true;
  currentSort: string = 'newest';



  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAll().subscribe(c => {
      this.cocktails = c
      this.cocktails.sort((a, b) => b.created - a.created)
      this.pagedCocktails = this.cocktails.slice(0, 5)

    })

  }

  onPageChange(event: PageEvent) {

    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;


    this.apiService.getAll().subscribe(c => {
      this.cocktails = c.sort((a, b) => this.sortCocktails(a, b, this.currentSort));
      this.pagedCocktails = this.cocktails.slice(startIndex, endIndex);
    })

  }

  onSortSelected(event: any) {
    this.currentSort = event.target.value;


    this.pagedCocktails.sort((a, b) => this.sortCocktails(a, b, this.currentSort));
    this.paginator.firstPage();

  }

  sortCocktails(a: Cocktail, b: Cocktail, sortBy: string): number {

    if (sortBy === 'newest') {
      return b.created - a.created;
    }
    if (sortBy === 'mostLiked') {
      return b.likes - a.likes;
    }
    if (sortBy === 'strength') {
      return b.strength - a.strength;
    }
    if (sortBy === 'a-z') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'z-a') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  }
}
