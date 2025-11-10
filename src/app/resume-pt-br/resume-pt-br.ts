import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para Angular 17+ (Standalone Components)

@Component({
  selector: 'app-resume-pt-br', // O seletor que você usará no HTML de outros componentes
  standalone: true, // Use 'true' se for um Standalone Component (padrão em novos projetos)
  imports: [CommonModule], // Importe módulos que este componente precisa
  templateUrl: './resume-pt-br.html',
  styleUrl: './resume-pt-br.css', // Note a mudança para 'styleUrl' no Angular 17+
})
export class ResumePtBrComponent {
  // Adicione aqui a lógica do seu componente (propriedades, métodos, etc.)
  title = 'Meu Currículo em Português';
}
