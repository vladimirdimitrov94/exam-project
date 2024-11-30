import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';
import { Cocktail } from '../../types/cokctail';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [LoaderComponent, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  
  cocktail = {} as Cocktail
  isLoading = true;

  constructor(private route: ActivatedRoute, private apiService:ApiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['cocktailId'];

    this.apiService.getSingle(id).subscribe(c =>
      this.cocktail = c
    )
    this.isLoading = false;
  }
}
