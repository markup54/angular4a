import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdycjaComponent } from './edycja/edycja.component';
import { ListaComponent } from './lista/lista.component';
import { NajlepszyComponent } from './najlepszy/najlepszy.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: 'samochody', component:ListaComponent},
  {path:'najlepszy',component:NajlepszyComponent},
  {path:'edycja',component:EdycjaComponent},
  {path:'', redirectTo:'/samochody',pathMatch:'full'},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
