import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tarefa1',
  templateUrl: './tarefa1.component.html',
  styleUrls: ['./tarefa1.component.css'],
  imports: [CommonModule]
})
export class Tarefa1Component implements OnInit {
  soma: number = 0;
  activeCard: boolean = false;  // Controla a visibilidade do conteúdo

  ngOnInit(): void {
    let indice = 13;
    let k = 0;
    let soma = 0;
    while (k < indice) {
      k++;
      soma += k;
    }
    this.soma = soma;
  }

  toggleCard(): void {
    this.activeCard = !this.activeCard;  // Alterna entre mostrar e ocultar
  }
}

