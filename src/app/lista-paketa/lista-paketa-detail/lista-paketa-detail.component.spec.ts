import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPaketaDetailComponent } from './lista-paketa-detail.component';

describe('ListaPaketaDetailComponent', () => {
  let component: ListaPaketaDetailComponent;
  let fixture: ComponentFixture<ListaPaketaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPaketaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPaketaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
