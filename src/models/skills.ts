// src/app/skills.service.ts

import { Observable } from 'rxjs';

// Interface para cada item dentro do array 'habilidades'
export interface Habilidade {
  id: number;
  nome: string;
}

// Interface para a entidade Categoria (ou 'skill principal')
export interface SkillEntidade {
  id: number;
  nome: string; // Ex: 'Front-end'
}

// Interface FINAL que representa a estrutura de um item na lista de retorno da API
// Ex: { skill: {id: 1, nome: 'Front-end'}, habilidades: [...] }
export interface SkillCategory {
  skill: SkillEntidade;
  habilidades: Habilidade[];
}

// --- Outras Interfaces (Mantidas, apenas para contexto) ---

// 2. Tipagem para a Formação (Rota /formacao)
export interface FormacaoItem {
  id: number;
  curso: string;
  instituicao: string;
  periodo: string;
  // Adapte estas propriedades conforme as colunas da sua tabela 'formacao'
}

// 3. Tipagem para Certificações (Se você tiver uma rota /certificacoes)
export interface CertificacaoItem {
  id: number;
  nome: string;
  link: string; // Exemplo
}
