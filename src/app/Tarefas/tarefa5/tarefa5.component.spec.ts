import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarefa5Component } from './tarefa5.component';

describe('Tarefa5Component', () => {
  let component: Tarefa5Component;
  let fixture: ComponentFixture<Tarefa5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarefa5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarefa5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
