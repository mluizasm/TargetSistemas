import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarefa3Component } from './tarefa3.component';

describe('Tarefa3Component', () => {
  let component: Tarefa3Component;
  let fixture: ComponentFixture<Tarefa3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarefa3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarefa3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
