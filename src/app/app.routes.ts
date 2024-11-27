import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AddComponent } from './cocktails/add/add.component';
import { EditComponent } from './cocktails/edit/edit.component';
import { CatalogueComponent } from './cocktails/catalogue/catalogue.component';
import { ErrorScreenComponent } from './core/error-screen/error-screen.component';
import { DetailsComponent } from './cocktails/details/details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cocktails', children:[
        {path: '',component: CatalogueComponent},
        {path: ':cocktailId', component: DetailsComponent}
    ] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'add', component: AddComponent },
    { path: 'edit', component: EditComponent },
    { path: '404', component: ErrorScreenComponent },
    { path: '**', redirectTo: '/404' }
];
