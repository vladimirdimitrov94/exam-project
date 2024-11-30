import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  constructor(private apiService: ApiService, private router: Router) { }

  addCocktail(form: NgForm) {

    console.log(form.invalid);
    
    // if (form.invalid) {
    //   return;
    // }

    const cocktail = {
      img: form.value.img,
      ingredients: form.value.ingredients,
      method: form.value.method,
      name: form.value.name,
      strength: form.value.strength
    }


    this.apiService.addCocktail(cocktail).subscribe(() => {
      this.router.navigate(['/cocktails'])
    });

  }
}
