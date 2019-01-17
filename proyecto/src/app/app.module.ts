import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JkpruebasComponent } from './components/jkpruebas/jkpruebas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { DetallebarraComponent } from './components/detalle-barra/detallebarra.component';
import { DetallecircularComponent } from './components/detalle-circular/detallecircular.component';
import { DetallelistaComponent } from './components/detalle-lista/detallelista.component';

//router
import { APP_ROUTING } from './app.routes';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//graficos
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    JkpruebasComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ProyectoComponent,
    DetalleComponent,
    DetallecircularComponent,
    DetallelistaComponent,
    DetallebarraComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ChartsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
