import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../service/all-services.service';

@Component({
  selector: 'app-lista-operatera',
  templateUrl: './lista-operatera.component.html',
  styleUrls: ['./lista-operatera.component.css']
})
export class ListaOperateraComponent implements OnInit {

  listaOperatera = [];
  odabraniOperater = {}

  constructor(private _service : AllServicesService) { }

  ngOnInit(): void {
    this._service.getOperatere().subscribe(
      respones => (this.listaOperatera = respones),
      error => console.log("Error getOperatere" + error)
    )
  }

  detail(id){
    this.listaOperatera.map(operater =>{
      if(operater.id === id){
        this.odabraniOperater = operater;
      }
    })
  }

  deleteOperater(id){
    this._service.deleteOperator(id).subscribe(
      response => console.log("Response " + response),
      error => console.log("Error " + error)
    )
  }


}
