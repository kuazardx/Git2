import { Routes } from '@angular/router';
import { ProfileDetailsComponent } from './profile-details.component';



export const DETAILS_ROUTES: Routes = [
    { path: 'perfil', component: ProfileDetailsComponent },
    { path: '**', pathMatch: 'full', redirectTo:'error'}

];