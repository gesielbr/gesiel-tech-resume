import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExperienceModel } from '../models/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  @Input() experiences: ExperienceModel[] = [];

  // Método para formatar datas (simplificado)
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
    });
  }
}
