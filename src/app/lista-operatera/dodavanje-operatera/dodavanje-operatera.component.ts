import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AllServicesService } from 'src/app/service/all-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dodavanje-operatera',
  templateUrl: './dodavanje-operatera.component.html',
  styleUrls: ['./dodavanje-operatera.component.css']
})
export class DodavanjeOperateraComponent implements OnInit {

  constructor(private fb: FormBuilder, private _service: AllServicesService,
              private router: Router) { }

  ngOnInit(): void {
  }

  registrationForm = this.fb.group({
    naziv: [''],
    pozivniBroj: ['']
  })

  registracija(){
    var formObj = this.registrationForm.getRawValue();
    this._service.dodajOperatera(formObj).subscribe(
      response => console.log("Response " + response),
      error => console.log("Error " + error)
    )
    this.router.navigate(['/listaOperatera'])
  }

}
