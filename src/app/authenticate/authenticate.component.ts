import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-authenticate',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.css'
})
export class AuthenticateComponent {


  //TODO: should be dybnamic
  isAuthenticating = false;

  constructor(private userService: UserService) { }


  // ngOnInit(): void {
   
  //   const user = this.userService.getUser()
  //   if(user){
  //     this.isAuthenticating = false
  //     console.log(user);
  //     console.log(this.isAuthenticating);
  //   }
  // }
}
