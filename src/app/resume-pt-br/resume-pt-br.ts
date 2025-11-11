import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { About } from '../../about/about';
import { SpecialtyCards } from '../../specialty-cards/specialty-cards';

@Component({
  selector: 'app-resume-pt-br',
  standalone: true,
  imports: [CommonModule, HeaderComponent, About, SpecialtyCards],
  templateUrl: './resume-pt-br.html',
  styleUrl: './resume-pt-br.css',
})
export class ResumePtBrComponent {
  title = 'Meu Currículo em Português';
}
