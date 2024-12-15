import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AddComponent } from './cocktails/add/add.component';
import { EditComponent } from './cocktails/edit/edit.component';
import { CatalogueComponent } from './cocktails/catalogue/catalogue.component';
import { ErrorScreenComponent } from './core/error-screen/error-screen.component';
import { DetailsComponent } from './cocktails/details/details.component';
import { AuthGuard, LoggedGuard } from './guards/auth.guard';
import { MyCocktailsComponent } from './cocktails/my-cocktails/my-cocktails.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'cocktails', children: [
            { path: '', component: CatalogueComponent },
            { path: ':cocktailId', component: DetailsComponent }
        ]
    },
    { path: 'login', component: LoginComponent, canActivate: [LoggedGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [LoggedGuard] },
    { path: 'add', component: AddComponent, canActivate: [AuthGuard] },
    {
        path: 'edit', canActivate: [AuthGuard], children: [
            { path: '', component: EditComponent },
            { path: ':cocktailId', component: EditComponent }
        ]
    }, 
    { path: 'my-cocktails', component: MyCocktailsComponent, canActivate: [AuthGuard] },
    { path: '404', component: ErrorScreenComponent },
    { path: '**', redirectTo: '/404' }
];
