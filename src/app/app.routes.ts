import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ErrorScreenComponent } from './error-screen/error-screen.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cocktails', component: CatalogueComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'add', component: AddComponent },
    { path: 'edit', component: EditComponent },
    { path: '404', component: ErrorScreenComponent },
    { path: '**', redirectTo: '/404' }
];
