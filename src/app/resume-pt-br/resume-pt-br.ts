import { Component, OnInit, Renderer2, Inject, inject, ChangeDetectorRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule, DOCUMENT } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { About } from '../../about/about';
import { SpecialtyCards } from '../../specialty-cards/specialty-cards';
import { ExperienceComponent } from '../../experience/experience';
import { ExperienceService } from '../../services/experience';
import { ExperienceModel } from '../../models/experience';
import { Observable } from 'rxjs'; // ✅ Removido 'map' pois não é mais necessário aqui
import { FormacaoItem, SkillCategory } from '../../models/skills';
import { Skills } from '../../services/skills'; // Certifique-se que o nome do serviço é 'DataService'
import { TranslateService } from '@ngx-translate/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-resume-pt-br',
  standalone: true,
  imports: [CommonModule, HeaderComponent, About, SpecialtyCards, ExperienceComponent],
  templateUrl: './resume-pt-br.html',
  styleUrl: './resume-pt-br.css',
})
export class ResumePtBrComponent implements OnInit {
  title = 'Meu Currículo em Português';
  experiences: ExperienceModel[] = [];

  currentLang = 'pt';

  // ✅ Renomeei para refletir a nova simplicidade (chama o Observable do serviço)
  skillsGrouped$!: Observable<SkillCategory[]>;
  formacao$!: Observable<FormacaoItem[]>;

  private dataService = inject(Skills);

  constructor(
    private experienceService: ExperienceService,
    private titleService: Title,
    private metaService: Meta,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    let savedLang = 'pt';

    if (isPlatformBrowser(this.platformId)) {
      savedLang = localStorage.getItem('lang') || 'pt';
    }

    this.translate.setDefaultLang('pt');
    this.translate.use(savedLang);

    this.loadExperiences();

    this.translate.onLangChange.subscribe(() => {
      this.loadExperiences();
    });

    this.setSEO();
    this.skillsGrouped$ = this.loadSkills();
    this.formacao$ = this.dataService.getFormacao();
  }

  loadSkills(): Observable<SkillCategory[]> {
    return this.dataService.getSkills();
  }

  // O bloco de código map/reduce obsoleto foi removido daqui

  setSEO() {
    // 🔹 TITLE GLOBAL
    this.titleService.setTitle(
      'Gesiel Souza Oliveira | Front-end Developer (Angular) & Web Analytics Expert',
    );

    // 🔹 DESCRIPTIONS multilíngues (PT + EN)
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Currículo profissional de Gesiel Souza Oliveira — Desenvolvedor Front-end especialista em Angular, UX, Web Analytics (GTM, GA4, Adobe Analytics, Insider) e criação de componentes escaláveis. Global Front-end Developer with expertise in Angular, UX, GTM, GA4 and Adobe Analytics.',
      },
      {
        name: 'keywords',
        content:
          'Front-end Developer, Angular Developer, Remote Developer, Web Analytics Specialist, GA4 Expert, GTM Expert, Adobe Analytics, Insider platform, UX Engineer, Desenvolvedor Front-end, Desenvolvedor Angular, Trabalho Remoto, Angular Remote Job',
      },
      { name: 'author', content: 'Gesiel Souza Oliveira' },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { name: 'language', content: 'pt-BR, en-US' },
      { name: 'content-language', content: 'pt-BR, en-US' },
    ]);

    // 🔹 OPEN GRAPH (Global)
    this.metaService.addTags([
      {
        property: 'og:title',
        content: 'Gesiel Souza Oliveira — Front-end Developer (Angular) & Web Analytics',
      },
      {
        property: 'og:description',
        content:
          'Angular Developer and Web Analytics Specialist (GTM, GA4, Adobe Analytics, Insider). Portfolio e currículo profissional.',
      },
      { property: 'og:type', content: 'profile' },
      { property: 'og:url', content: 'https://gesieloliveira.com.br' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:locale:alternate', content: 'en_US' },
    ]);

    // 🔹 TWITTER CARD
    this.metaService.addTags([
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:title',
        content: 'Gesiel Souza Oliveira — Front-end Developer (Angular)',
      },
      {
        name: 'twitter:description',
        content: 'Global Front-end Developer specializing in Angular, UX and Web Analytics.',
      },
    ]);

    // 🔹 CANONICAL
    const link = this.renderer.createElement('link');
    link.rel = 'canonical';
    link.href = 'https://gesieloliveira.com.br';
    this.renderer.appendChild(this.document.head, link);

    // 🔹 JSON-LD GLOBAL
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Gesiel Souza Oliveira',
      jobTitle: ['Front-end Developer', 'Angular Developer', 'Web Analytics Specialist'],
      description:
        'Global Front-end Developer specializing in Angular, UX, GTM, GA4, Adobe Analytics and Insider. Experienced in scalable component development and remote teams.',
      url: 'https://gesieloliveira.com.br',
      nationality: 'Brazilian',
      worksFor: {
        '@type': 'Organization',
        name: 'Freelancer / Remote',
      },
      email: 'mailto:gesiel.br@gmail.com',
      telephone: '+55 51 99703-2022',
      sameAs: [
        'https://linkedin.com/in/gesiel-souzaoliveira-98a0855a',
        'https://wa.me/5551997032022',
      ],
      skills: [
        'Angular',
        'TypeScript',
        'Bootstrap',
        'GTM',
        'GA4',
        'Adobe Analytics',
        'Insider',
        'UX',
        'Front-end Architecture',
        'Webcomponents',
        'CSS',
        'HTML',
      ],
    };

    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.renderer.appendChild(this.document.head, script);
  }

  loadExperiences() {
    const lang = this.translate.currentLang || this.translate.defaultLang || 'pt';

    this.experienceService.getExperiences(lang).subscribe({
      next: (data) => {
        this.experiences = [...data]; // ✅ nova referência
        this.cdr.detectChanges(); // ✅ força render agora
      },
      error: (error) => {
        console.error('Erro ao carregar experiências:', error);
      },
    });
  }
}
