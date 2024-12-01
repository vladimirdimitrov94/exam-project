import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';
import { Cocktail } from '../../types/cokctail';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { User } from '../../types/user';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [LoaderComponent, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  cocktail = {} as Cocktail
  user: User | null = null;
  isLoading = true;
  isAuthor = false;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private userService: UserService) { }

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
      this.isLoading = false;

      if (this.isLogged) {
        this.user = this.userData;
      }

      if (this.user?.objectId == this.cocktail.ownerId) {
        this.isAuthor = true;
      }

    }
    )
  }

}
