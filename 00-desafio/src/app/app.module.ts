import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ErrorComponent } from './components/error/error.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { APP_ROUTING } from './routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ErrorComponent,
    ProfileDetailsComponent,
    NavbarComponent,
    DomseguroPipe,
    CapitalizadoPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
