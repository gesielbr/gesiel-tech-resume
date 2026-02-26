import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { FormacaoItem, SkillCategory } from '../models/skills';

@Injectable({
  providedIn: 'root',
})
export class Skills {
  private apiUrl = 'https://resume-api-seven-sigma.vercel.app';
  private http = inject(HttpClient);

  // Cache centralizado por idioma
  private skillsCache: Partial<Record<string, Observable<SkillCategory[]>>> = {};
  private formacaoCache$?: Observable<FormacaoItem[]>;

  getSkills(lang: 'pt' | 'en' | 'es' = 'pt'): Observable<SkillCategory[]> {
    // 1. Se o idioma já foi solicitado antes, retorna o Observable do cache
    if (this.skillsCache[lang]) {
      return this.skillsCache[lang]!;
    }

    // 2. Se for a primeira vez, faz a requisição e guarda no cache
    this.skillsCache[lang] = this.http
      .get<SkillCategory[]>(`${this.apiUrl}/api/skills`, { params: { lang } })
      .pipe(
        // O shareReplay(1) faz com que novos assinantes recebam o último valor
        // sem disparar uma nova requisição HTTP.
        shareReplay({ bufferSize: 1, refCount: true }),
      );

    return this.skillsCache[lang]!;
  }

  getFormacao(): Observable<FormacaoItem[]> {
    if (!this.formacaoCache$) {
      this.formacaoCache$ = this.http
        .get<FormacaoItem[]>(`${this.apiUrl}/api/formacao`)
        .pipe(shareReplay({ bufferSize: 1, refCount: true }));
    }
    return this.formacaoCache$;
  }
}
