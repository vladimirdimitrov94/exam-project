import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { inject } from '@angular/core';


const { apiUrl } = environment
const API = '/api';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router); // Inject the Router service


  if (req.url.startsWith(API)) {
    req = req.clone({
      url: req.url.replace(API, apiUrl)
    })
  }

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 404) {
        router.navigate(['/404']);
      }

      return next(req);
    })
  );
}