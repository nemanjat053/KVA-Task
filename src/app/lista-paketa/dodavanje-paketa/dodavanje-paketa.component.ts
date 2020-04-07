import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { AllServicesService } from 'src/app/service/all-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dodavanje-paketa',
  templateUrl: './dodavanje-paketa.component.html',
  styleUrls: ['./dodavanje-paketa.component.css'],
})
export class DodavanjePaketaComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _service: AllServicesService
  ) {}

  ngOnInit(): void {}

  registrationForm = this.fb.group({
    naziv: [''],
    cena: ['']
  });

  registracija() {
    var formObj = this.registrationForm.getRawValue();
    console.log(formObj);
    this._service.dodajPaket(formObj).subscribe(
      (response) => console.log('Response ' + response),
      (error) => console.log('Error ' + error)
    );
    this.router.navigate(['/listaKorisnika']);
  }
}
