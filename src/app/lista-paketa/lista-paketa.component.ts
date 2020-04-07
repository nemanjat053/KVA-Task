import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../service/all-services.service';

@Component({
  selector: 'app-lista-paketa',
  templateUrl: './lista-paketa.component.html',
  styleUrls: ['./lista-paketa.component.css']
})
export class ListaPaketaComponent implements OnInit {

  listaPaketa = [];
  odabraniPaket = {}

  constructor(private _service : AllServicesService) { }

  ngOnInit(): void {
    this._service.getPaketi().subscribe(
      response => this.listaPaketa = response,
      error => console.log("Error getPaketi" + error)
    )
  }

  detail(id){
    this.listaPaketa.map(paket => {
      if(paket.id === id){
        this.odabraniPaket = paket;
      }
    })
  }

  deletePaket(id){
    this._service.deletePaket(id).subscribe(
      response => console.log("Response " + response),
      error => console.log("Error" + error)
    )
  }

}
