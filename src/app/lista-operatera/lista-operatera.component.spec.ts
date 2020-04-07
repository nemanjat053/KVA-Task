import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOperateraComponent } from './lista-operatera.component';

describe('ListaOperateraComponent', () => {
  let component: ListaOperateraComponent;
  let fixture: ComponentFixture<ListaOperateraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOperateraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOperateraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
