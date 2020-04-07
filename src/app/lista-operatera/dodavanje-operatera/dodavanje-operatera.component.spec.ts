import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeOperateraComponent } from './dodavanje-operatera.component';

describe('DodavanjeOperateraComponent', () => {
  let component: DodavanjeOperateraComponent;
  let fixture: ComponentFixture<DodavanjeOperateraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodavanjeOperateraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjeOperateraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
