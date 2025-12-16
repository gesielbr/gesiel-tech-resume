// src/app/skills.service.ts

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Importe 'tap' para uso no pipe
import { Observable, of, pipe, tap } from 'rxjs';
import { FormacaoItem, SkillCategory } from '../models/skills';

@Injectable({
  providedIn: 'root',
})
export class Skills {
  // ⚠️ PASSO CRUCIAL: Substitua este placeholder pela sua URL de Produção na Vercel!
  private apiUrl = 'https://resume-api-seven-sigma.vercel.app/';

  private http = inject(HttpClient);

  // 1. Rota para SKILLS (Usando a interface SkillCategory correta)
  getSkills(): Observable<SkillCategory[]> {
    // Agora chama a rota pública da Vercel: /api/skills
    return this.http.get<SkillCategory[]>(`${this.apiUrl}/api/skills`).pipe(
      // Usamos 'tap' para inspecionar os dados no console do navegador (F12)
      tap((data) => {
        console.log('✅ Dados de Skills recebidos da VERCEL com sucesso:', data);
        console.log('Primeira Categoria:', data[0].skill.nome);
      })
    );
  }

  getFormacao(): Observable<FormacaoItem[]> {
    return this.http.get<FormacaoItem[]>(`${this.apiUrl}/api/formacao`).pipe(
      tap((data) => {
        console.log('📘 Formação recebida:', data);
      })
    );
  }
}
