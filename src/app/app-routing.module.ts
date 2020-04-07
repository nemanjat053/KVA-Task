import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaOperateraComponent } from './lista-operatera/lista-operatera.component';
import { ListaKorisnikaComponent } from './lista-korisnika/lista-korisnika.component';
import { ListaPaketaComponent } from './lista-paketa/lista-paketa.component';
import { ListaKorisnikaDetailComponent } from './lista-korisnika/lista-korisnika-detail/lista-korisnika-detail.component';
import { DodavanjePaketaComponent } from './lista-paketa/dodavanje-paketa/dodavanje-paketa.component';
import { DodavanjeOperateraComponent } from './lista-operatera/dodavanje-operatera/dodavanje-operatera.component';
import { DodavanjeKorisnikaComponent } from './lista-korisnika/dodavanje-korisnika/dodavanje-korisnika.component';


const routes: Routes = [
  {path: 'listaOperatera', component: ListaOperateraComponent},
  {path: 'registracijaOperatera', component: DodavanjeOperateraComponent},

  {path: 'listaKorisnika', component: ListaKorisnikaComponent},
  {path: 'registracijaKorisnika', component: DodavanjeKorisnikaComponent},

  {path: 'listaPaketa', component: ListaPaketaComponent},
  {path: 'registracijaPaketa', component: DodavanjePaketaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ruotingComponents = [ListaOperateraComponent, ListaKorisnikaComponent, ListaPaketaComponent]