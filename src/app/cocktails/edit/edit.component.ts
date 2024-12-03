import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../types/cokctail';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  coktail: Cocktail | null = null;

  constructor (private apiService: ApiService, private route: ActivatedRoute, private router:Router) {}
    
  ngOnInit(): void {
    const id = this.route.snapshot.params['cocktailId'];
    this.apiService.getSingle(id).subscribe(c => {
      this.coktail = c;
    });

  }

  edit(form: NgForm){
    const id = this.coktail!.objectId;

    if(form.invalid){
      return
    }

    const cocktail = {
      img: form.value.img,
      ingredients: form.value.ingredients,
      method: form.value.method,
      name: form.value.name,
      strength: form.value.strength
    }

    this.apiService.editCocktail(id, cocktail).subscribe(() => {
      this.router.navigate(['/cocktails'])
    })
  }

}
