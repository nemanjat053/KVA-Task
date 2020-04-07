import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaKorisnikaDetailComponent } from './lista-korisnika-detail.component';

describe('ListaKorisnikaDetailComponent', () => {
  let component: ListaKorisnikaDetailComponent;
  let fixture: ComponentFixture<ListaKorisnikaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaKorisnikaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaKorisnikaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
