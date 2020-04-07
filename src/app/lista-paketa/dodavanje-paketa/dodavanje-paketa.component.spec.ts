import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjePaketaComponent } from './dodavanje-paketa.component';

describe('DodavanjePaketaComponent', () => {
  let component: DodavanjePaketaComponent;
  let fixture: ComponentFixture<DodavanjePaketaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodavanjePaketaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjePaketaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
