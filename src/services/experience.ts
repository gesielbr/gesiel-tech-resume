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
          'Atuação técnica em times ágeis, colaborando com squads multidisciplinares e utilizando práticas como Kanban e Sprints',
          'Configuração e validação de eventos de mensuração para geração de insights acionáveis',
          'Implementação e acompanhamento técnico de KPIs, contribuindo para otimização de prazos, recursos e decisões de negócio',
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
          'Desenvolvimento de aplicações web em Angular, com foco em componentização, organização de módulos, uso de services e integração com APIs REST',
          'Criação de componentes reutilizáveis seguindo boas práticas de arquitetura front-end, visando escalabilidade e fácil manutenção',
          'Atuação técnica junto a clientes internos para levantamento de requisitos, refinamento de demandas e definição de soluções',
          'Parceria com times de design na implementação de interfaces responsivas, acessíveis e centradas no usuário',
          'Correção de bugs e melhorias contínuas, garantindo estabilidade, performance e qualidade do código',
          'Criação de biblioteca própria de componentes (Design System) reutilizáveis, garantindo padronização visual, consistência de UX',
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
