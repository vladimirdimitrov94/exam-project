import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';
import { Cocktail } from '../../types/cokctail';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-my-cocktails',
  standalone: true,
  imports: [LoaderComponent, RouterLink, MatCardModule, MatPaginatorModule],
  templateUrl: './my-cocktails.component.html',
  styleUrl: './my-cocktails.component.css'
})
export class MyCocktailsComponent implements OnInit {

  cocktails: Cocktail[] = []
  pagedCocktails: Cocktail[] = []
  isLoading = true;

  constructor(private apiService: ApiService, private userService:UserService) { }

  get isLogged() {
    return this.userService.isLogged
  }

  get userData() {
    return this.userService.user;
  }



  ngOnInit(): void {
    const userID = this.userData?.objectId


    this.apiService.getAll().subscribe({next: c => {
      this.cocktails = c.filter(c => c.ownerId === userID);
      this.pagedCocktails = this.cocktails.slice(0, 5)
      if (c.length > 0) {
        this.isLoading = false;
      }
    }, error: (err) => {
      console.log(err);
      this.isLoading = false;
    }})

  }

  onPageChange(event: any) {

    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;

    this.apiService.getAll().subscribe(c => {
      this.pagedCocktails = c.sort((a, b) => Number(b.created) - Number(a.created)).slice(startIndex, endIndex)
    })

  }
}