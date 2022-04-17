import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaAComponent } from './components/consulta-a/consulta-a.component';
import { ConsultaBComponent } from './components/consulta-b/consulta-b.component';
import { FormOtrosCamposComponent } from './components/form-otros-campos/form-otros-campos.component';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';


const routes: Routes = [
  { path: '', redirectTo: 'registro', pathMatch: 'full' },
  { path: 'registro', component: FormRegistroComponent },
  { path: 'consultaa', component: ConsultaAComponent},
  { path: 'consultab', component: ConsultaBComponent},
  { path: 'otrosCampos', component: FormOtrosCamposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
