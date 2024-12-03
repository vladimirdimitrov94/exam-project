import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-screen',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './error-screen.component.html',
  styleUrl: './error-screen.component.css'
})
export class ErrorScreenComponent {

}

