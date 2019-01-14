import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { DetalleComponent } from './components/detalle/detalle.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'proyecto', component: ProyectoComponent },
    { path: 'detalle/:id', component: DetalleComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

    ];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
