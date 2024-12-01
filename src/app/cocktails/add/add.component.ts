import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../types/user';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{

  ownerId: string | undefined = '';

  get userData() {
    return this.userService.user;
  }

  constructor(private apiService: ApiService, private router: Router, private userService:UserService) { }

 ngOnInit(): void {
  this.ownerId = this.userData?.objectId  
  }

  addCocktail(form: NgForm) {

    
    if (form.invalid) {
      return;
    }

    const cocktail = {
      img: form.value.img,
      ingredients: form.value.ingredients,
      method: form.value.method,
      name: form.value.name,
      strength: form.value.strength,
      ownerId: this.ownerId
    }


    this.apiService.addCocktail(cocktail).subscribe(() => {
      this.router.navigate(['/cocktails'])
    });

  }
}
