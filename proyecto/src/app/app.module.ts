import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {A11yModule} from '@angular/cdk/a11y';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {DataTableModule} from "angular-6-datatable";
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
declare var jQuery:any;
declare var $:any;


//Componentes
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
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PaginadorComponent } from './components/paginador/paginador.component';

//router
import { APP_ROUTING } from './app.routes';


//graficos
import { ChartsModule } from 'ng2-charts';

//pipes
import { PipekeyPipe } from './pipes/pipekey.pipe';
import { EsperandoComponent } from './components/esperando/esperando.component';

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
    DetallebarraComponent,
    SpinnerComponent,
    PaginadorComponent,
    PipekeyPipe,
    EsperandoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule,
    ChartsModule,
    NoopAnimationsModule,
    DataTableModule,
    A11yModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
