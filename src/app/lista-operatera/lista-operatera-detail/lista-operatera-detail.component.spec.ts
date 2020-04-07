import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOperateraDetailComponent } from './lista-operatera-detail.component';

describe('ListaOperateraDetailComponent', () => {
  let component: ListaOperateraDetailComponent;
  let fixture: ComponentFixture<ListaOperateraDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOperateraDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOperateraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
