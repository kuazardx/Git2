import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DETAILS_ROUTES } from './components/profile-details/detail.routes';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ErrorComponent } from './components/error/error.component';

const APP_ROUTES : Routes = [
    { path: 'inicio',  component: HomeComponent },
    { path: 'perfiles', component: ProfileComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'perfil/:rut', component: ProfileDetailsComponent, 
        children: DETAILS_ROUTES
    },
    { path: '', pathMatch: 'prefix', redirectTo:'inicio'},
    { path: '**', pathMatch: 'full', redirectTo:'error'},
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
