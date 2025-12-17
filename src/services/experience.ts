import { Injectable } from '@angular/core';
import { ExperienceModel } from '../models/experience';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Experience {
  // SIMULA DADOS DO BACKEND - depois substitui por HTTP calls
  getExperiences(): Observable<ExperienceModel[]> {
    const experiences: ExperienceModel[] = [
      {
        id: 1,
        company: 'Consultoria Analytics',
        jobTitle: 'Analista de Sistemas',
        startDate: '2024-09-01',
        endDate: '2025-12-01',
        currentJob: false,
        schemaType: 'WorkExperience',
        description: [
          'Desenvolvimento e implementação de soluções analytics (GTM, GA4, Adobe Analytics, Insider) com foco em precisão de dados',
          'Liderança de projetos ágeis com squads multidisciplinares, utilizando Kanban e Sprints',
          'Configuração e validação de eventos de mensuração para geração de insights acionáveis',
          'Gestão estratégica de KPIs, otimização de prazos e recursos alinhados aos objetivos de negócio',
        ],
      },
      {
        id: 2,
        company: 'Linx',
        jobTitle: 'Desenvolvedor de Sistemas',
        startDate: '2021-09-01',
        endDate: '2024-04-01',
        currentJob: false,
        schemaType: 'WorkExperience',
        description: [
          'Desenvolvimento completo de aplicações web em Angular seguindo metodologias ágeis',
          'Criação de webcomponents reutilizáveis garantindo modularidade e manutenção facilitada',
          'Consultoria direta com clientes, conduzindo reuniões e propondo soluções personalizadas',
          'Colaboração ativa com designers para criar interfaces intuitivas focadas em UX',
          'Identificação e correção de bugs garantindo estabilidade das aplicações',
        ],
      },
      {
        id: 3,
        company: 'PUCRS',
        jobTitle: 'Analista Web',
        startDate: '2013-04-01',
        endDate: '2019-05-01',
        currentJob: false,
        schemaType: 'WorkExperience',
        description: [
          'Desenvolvimento de landing pages responsivas com HTML, CSS, JavaScript e Bootstrap',
          'Especialização em e-mail marketing responsivo com testes em múltiplos dispositivos',
          'Análise e acompanhamento de métricas para decisões estratégicas',
          'Treinamentos institucionais sobre boas práticas, reputação digital e novas tecnologias',
        ],
      },
      {
        id: 4,
        company: 'Grupo Potencial | Banco Cacique',
        jobTitle: 'Gerente Comercial | Gerente de Negócios',
        startDate: '2005-11-01',
        endDate: '2013-04-01',
        currentJob: false,
        schemaType: 'WorkExperience',
        description: [
          'Gestão completa de equipes com aplicação de feedbacks construtivos e desenvolvimento humano',
          'Monitoramento de indicadores de desempenho e ações corretivas para garantir resultados',
          'Relacionamento estratégico com clientes visando retenção e satisfação',
          'Elaboração de planos estratégicos e análise de mercado para novas parcerias',
          'Gestão financeira: contas a pagar/receber, fluxo de caixa e análise de crédito',
        ],
      },
    ];

    return of(experiences); // Simula Observable como se viesse de HTTP
  }
}
