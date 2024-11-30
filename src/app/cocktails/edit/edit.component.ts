import { Component } from '@angular/core';
import { Cocktail } from '../../types/cokctail';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  coktail: Cocktail | null = null;

  constructor (private apiService: ApiService, private route: ActivatedRoute){

    const id = this.route.snapshot.params['cocktailId'];
    this.apiService.getSingle(id).subscribe(c => this.coktail = c);
    
  }
}
