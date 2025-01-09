import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaturamentoPorEstado {
  SP: number;
  RJ: number;
  MG: number;
  ES: number;
  Outros: number;
}

@Component({
  selector: 'app-tarefa4',
  templateUrl: './tarefa4.component.html',
  styleUrls: ['./tarefa4.component.css'],
  imports: [CommonModule]
})
export class Tarefa4Component implements OnInit {

  faturamentoPorEstado: FaturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };

  faturamentoTotal: number = 0;
  percentualPorEstado: { [key in keyof FaturamentoPorEstado]: number } = {
    SP: 0,
    RJ: 0,
    MG: 0,
    ES: 0,
    Outros: 0
  };

  activeCard: string = ''; 

  constructor() { }

  ngOnInit(): void {
    this.calcularFaturamentoTotal();
    this.calcularPercentuais();
  }

  calcularFaturamentoTotal(): void {
    this.faturamentoTotal = Object.values(this.faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);
  }

  calcularPercentuais(): void {
    for (const estado in this.faturamentoPorEstado) {
      if (this.faturamentoPorEstado.hasOwnProperty(estado)) {
        this.percentualPorEstado[estado as keyof FaturamentoPorEstado] = (this.faturamentoPorEstado[estado as keyof FaturamentoPorEstado] / this.faturamentoTotal) * 100;
      }
    }
  }

  objectKeys(): (keyof FaturamentoPorEstado)[] {
    return Object.keys(this.faturamentoPorEstado) as (keyof FaturamentoPorEstado)[];
  }

  getPercentual(estado: keyof FaturamentoPorEstado): number {
    return this.percentualPorEstado[estado];
  }

  toggleCard(cardId: string): void {
    this.activeCard = this.activeCard === cardId ? '' : cardId;
  }

  isCardActive(cardId: string): boolean {
    return this.activeCard === cardId;
  }
}
