import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../service/all-services.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-lista-korisnika',
  templateUrl: './lista-korisnika.component.html',
  styleUrls: ['./lista-korisnika.component.css']
})
export class ListaKorisnikaComponent implements OnInit {

  korisnici = [];
  odabraniKorisnik;

  constructor(private _service : AllServicesService) { }

  ngOnInit(): void {
    this._service.getKorisnici().subscribe(
      response => this.korisnici = response,
      error => console.log("Error getKorisnici" + error)
    )
  }

  detail(id){
    this.korisnici.map(korisnik =>{
      if(korisnik.id === id){
        this.odabraniKorisnik = korisnik;
      }
    })
  }

  deleteKorisnik(id){
    this._service.deleteKorisnik(id).subscribe(
      response => console.log("Response " + response),
      error => console.log("Error " + error)
    )
  }

}
