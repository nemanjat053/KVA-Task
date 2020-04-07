import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaOperateraComponent } from './lista-operatera/lista-operatera.component';
import { ListaPaketaComponent } from './lista-paketa/lista-paketa.component';
import { ListaKorisnikaComponent } from './lista-korisnika/lista-korisnika.component';
import { ListaKorisnikaDetailComponent } from './lista-korisnika/lista-korisnika-detail/lista-korisnika-detail.component';
import { ListaOperateraDetailComponent } from './lista-operatera/lista-operatera-detail/lista-operatera-detail.component';
import { ListaPaketaDetailComponent } from './lista-paketa/lista-paketa-detail/lista-paketa-detail.component';
import { DodavanjeKorisnikaComponent } from './lista-korisnika/dodavanje-korisnika/dodavanje-korisnika.component';
import { DodavanjeOperateraComponent } from './lista-operatera/dodavanje-operatera/dodavanje-operatera.component';
import { DodavanjePaketaComponent } from './lista-paketa/dodavanje-paketa/dodavanje-paketa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaOperateraComponent,
    ListaPaketaComponent,
    ListaKorisnikaComponent,
    ListaKorisnikaDetailComponent,
    ListaOperateraDetailComponent,
    ListaPaketaDetailComponent,
    DodavanjeKorisnikaComponent,
    DodavanjeOperateraComponent,
    DodavanjePaketaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
