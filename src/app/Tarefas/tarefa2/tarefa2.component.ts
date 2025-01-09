import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefa2',
  templateUrl: './tarefa2.component.html',
  styleUrls: ['./tarefa2.component.css'],
  imports: [CommonModule]
})
export class Tarefa2Component implements OnInit {

  numero: number = 21; 
  pertenceFibonacci: boolean = false; 

  constructor() { }

  ngOnInit(): void {
    this.pertenceFibonacci = this.verificarFibonacci(this.numero);
  }

  verificarFibonacci(num: number): boolean {
    let a = 0, b = 1;

    if (num === a || num === b) {
      return true;
    }

    let c = a + b;
    while (c <= num) {
      if (c === num) {
        return true;
      }
      a = b;
      b = c;
      c = a + b;
    }
    return false;
  }

  activeCard: string = '';

  toggleCard(cardId: string): void {
    this.activeCard = this.activeCard === cardId ? '' : cardId;
  }

  isCardActive(cardId: string): boolean {
    return this.activeCard === cardId;
  }
}
