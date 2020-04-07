import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPaketaComponent } from './lista-paketa.component';

describe('ListaPaketaComponent', () => {
  let component: ListaPaketaComponent;
  let fixture: ComponentFixture<ListaPaketaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPaketaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPaketaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
