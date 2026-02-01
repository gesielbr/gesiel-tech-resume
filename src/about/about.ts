import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  // Dados que podem ser dinâmicos se quiser
  name = 'Gesiel Souza Oliveira';
}
