import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AllServicesService } from 'src/app/service/all-services.service';

@Component({
  selector: 'app-lista-korisnika-detail',
  templateUrl: './lista-korisnika-detail.component.html',
  styleUrls: ['./lista-korisnika-detail.component.css']
})
export class ListaKorisnikaDetailComponent implements OnInit {

  @Input() odabraniKorisnik;

  public changed: boolean = false;


  constructor(private fb: FormBuilder, private _service : AllServicesService) { }

  ngOnInit(): void {
  }

  izmjena(){
    var forma = this.fb.group({
      paketId: [this.odabraniKorisnik.paketId],
      datumPrijave: [this.odabraniKorisnik.datumPrijave],
      datumOdjave: [this.odabraniKorisnik.datumOdjave]
    })

    var raw = forma.getRawValue();

    this._service.changeKorisnik(raw, this.odabraniKorisnik.id).subscribe(
      response => console.log("Response " + response),
      error => console.log("Error" + error)
    )

    this.changed = true;
  }

  detail(){
  }

}
