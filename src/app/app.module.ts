import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { ListRegistrosComponent, MatPaginatorIntlEsp } from './components/list-registros/list-registros.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDatepickerIntl, MatDatepickerModule } from '@angular/material/datepicker';
import { ConsultaAComponent, MatDatepickerIntlEsp } from './components/consulta-a/consulta-a.component';
import { ConsultaBComponent } from './components/consulta-b/consulta-b.component';
import { HttpClientModule } from '@angular/common/http';
import { FormOtrosCamposComponent } from './components/form-otros-campos/form-otros-campos.component';
import { ListOtrosCamposComponent } from './components/list-otros-campos/list-otros-campos.component';





@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    FormRegistroComponent,
    ListRegistrosComponent,
    ConsultaAComponent,
    ConsultaBComponent,
    FormOtrosCamposComponent,
    ListOtrosCamposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDatepickerModule,
    HttpClientModule
  ],
  providers: [{provide: MatPaginatorIntl, useClass: MatPaginatorIntlEsp}, {provide: MatDatepickerIntl, useClass: MatDatepickerIntlEsp}, {provide: MAT_DATE_LOCALE, useValue: 'es-MX'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
