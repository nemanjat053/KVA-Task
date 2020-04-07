import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-paketa-detail',
  templateUrl: './lista-paketa-detail.component.html',
  styleUrls: ['./lista-paketa-detail.component.css']
})
export class ListaPaketaDetailComponent implements OnInit {
  
  @Input() odabraniPaket;
  public changed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  change(){

  }

  izmjena() {

  }
}
