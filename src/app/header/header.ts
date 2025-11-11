import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  // Você pode adicionar propriedades aqui se quiser tornar dados dinâmicos
  name = 'Gesiel Souza Oliveira';
  jobTitle = 'Analista de Sistemas | Desenvolvedor Front-end';
  location = 'São Pedro da Aldeia, Rio de Janeiro - Brasil';
  email = 'gesiel.br@gmail.com';
  phone = '+55 51 997032022';
}
