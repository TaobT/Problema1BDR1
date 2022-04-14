import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaAComponent } from './components/consulta-a/consulta-a.component';
import { ConsultaBComponent } from './components/consulta-b/consulta-b.component';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [
  { path: '', redirectTo: 'registro', pathMatch: 'full' },
  { path: 'registro', component: FormRegistroComponent },
  { path: 'lista', component: ListComponent },
  { path: 'consultaa', component: ConsultaAComponent},
  { path: 'consultab', component: ConsultaBComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
