import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-operatera-detail',
  templateUrl: './lista-operatera-detail.component.html',
  styleUrls: ['./lista-operatera-detail.component.css']
})
export class ListaOperateraDetailComponent implements OnInit {
  
  @Input() odabraniOperater;

  public changed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  izmjena(){

  }

}
