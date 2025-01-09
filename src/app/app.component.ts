import { Component } from '@angular/core';
import { CommonModule  } from '@angular/common'; 
import { Tarefa1Component } from './Tarefas/tarefa1/tarefa1.component';
import { Tarefa2Component } from './Tarefas/tarefa2/tarefa2.component';
import { Tarefa3Component } from './Tarefas/tarefa3/tarefa3.component';
import { Tarefa4Component } from './Tarefas/tarefa4/tarefa4.component';
import { Tarefa5Component } from './Tarefas/tarefa5/tarefa5.component';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    Tarefa1Component,
    Tarefa2Component,
    Tarefa3Component,
    Tarefa4Component,
    Tarefa5Component,
    CommonModule, 
    FormsModule , 
  ]
})
export class AppComponent {
  title = 'Modernize Angular Admin Tempplate';
}
