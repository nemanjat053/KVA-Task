import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AllServicesService } from 'src/app/service/all-services.service';

@Component({
  selector: 'app-dodavanje-korisnika',
  templateUrl: './dodavanje-korisnika.component.html',
  styleUrls: ['./dodavanje-korisnika.component.css'],
})
export class DodavanjeKorisnikaComponent implements OnInit {
  paketi = [];
  izabraniPaket = {}
  id;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _service: AllServicesService
  ) {}

  ngOnInit(): void {
    this._service.getPaketi().subscribe(
      (response) => (this.paketi = response),
      (error) => console.log('ERROR' + error)
    );
  }

  registrationForm = this.fb.group({
    broj: [''],
    paketId: [],
    datumPrijave: [''],
    datumOdjave: [''],
  });
  

  selectChangeHandler(json) {
    this.izabraniPaket = json;
  }

  registracija() {
  
    var formObj = this.registrationForm.getRawValue();
    console.log(formObj);
    this._service.dodajKorisnika(formObj).subscribe(
      (response) => console.log('Response ' + response),
      (error) => console.log('Error ' + error)
    );
    this.router.navigate(['/listaKorisnika']);
  }
}
