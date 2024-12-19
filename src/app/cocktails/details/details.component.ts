import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';
import { Cocktail } from '../../types/cokctail';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { User } from '../../types/user';
import { UserService } from '../../user/user.service';
import { MatButtonModule } from '@angular/material/button';
import { CreatedAtPipe } from '../../shared/pipes/created-at.pipe';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [LoaderComponent, RouterLink, MatButtonModule, CreatedAtPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  cocktail = {} as Cocktail
  user: User | null = null;
  isLoading = true;
  isAuthor = false;
  likes: number | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private userService: UserService, private router: Router) { }

  get isLogged(): boolean {
    return this.userService.isLogged
  }

  get userData() {
    return this.userService.user;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['cocktailId'];

    this.apiService.getSingle(id).subscribe(c => {
      this.cocktail = c
      this.likes = Object.keys(this.cocktail.likes).length;
      this.isLoading = false;

      if (this.isLogged) {
        this.user = this.userData;
      }

      if (this.user?.objectId == this.cocktail.ownerId) {
        this.isAuthor = true;
      }

    }
    )

    this.isLiked()
  }

  delete(id: string) {
    const confirmed = window.confirm('Are you sure you want to delete this cocktail?');
    if (confirmed) {
      this.apiService.deleteCocktail(id).subscribe(() => {
        this.router.navigate(['/cocktails'])
      })
    } else {
      return;
    } 
  }


  like() {

    const userId: string = this.user!.objectId;

    this.cocktail.likes[userId] = userId;

    this.apiService
      .editCocktail(this.cocktail.objectId, { likes: this.cocktail.likes })
      .subscribe(c => {
        this.cocktail = c;
      });

    this.likes = Object.keys(this.cocktail.likes).length;
  }

  isLiked(): boolean {
    if (this.cocktail.likes?.hasOwnProperty(this.user!.objectId)) {
      return true;
    }
    return false;
  }

}
