import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefa5',
  templateUrl: './tarefa5.component.html',
  imports: [FormsModule, CommonModule]
})
export class Tarefa5Component {
  textoOriginal: string = ''; 
  textoInvertido: string = '';  
  activeCard: string = ''; 

  inverterString(str: string): string {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i]; 
    }
    return resultado;
  }

  onInputChange(): void {
    this.textoInvertido = this.inverterString(this.textoOriginal);  
  }

  toggleCard(cardId: string): void {
    this.activeCard = this.activeCard === cardId ? '' : cardId;
  }

  isCardActive(cardId: string): boolean {
    return this.activeCard === cardId;
  }
}
