import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarefa4Component } from './tarefa4.component';

describe('Tarefa4Component', () => {
  let component: Tarefa4Component;
  let fixture: ComponentFixture<Tarefa4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarefa4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarefa4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
