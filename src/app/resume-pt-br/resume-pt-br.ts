import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { About } from '../../about/about';
import { SpecialtyCards } from '../../specialty-cards/specialty-cards';
import { ExperienceComponent } from '../../experience/experience';
import { Experience } from '../../services/experience';
import { ExperienceModel } from '../../models/experience';

@Component({
  selector: 'app-resume-pt-br',
  standalone: true,
  imports: [CommonModule, HeaderComponent, About, SpecialtyCards, ExperienceComponent],
  templateUrl: './resume-pt-br.html',
  styleUrl: './resume-pt-br.css',
})
export class ResumePtBrComponent implements OnInit {
  title = 'Meu Currículo em Português';
  experiences: ExperienceModel[] = []; // ✅ Use ExperienceModel

  constructor(private experienceService: Experience) {}

  ngOnInit() {
    this.loadExperiences();
  }

  loadExperiences() {
    this.experienceService.getExperiences().subscribe({
      next: (data) => {
        this.experiences = data;
      },
      error: (error) => {
        console.error('Erro ao carregar experiências:', error);
      },
    });
  }
}
