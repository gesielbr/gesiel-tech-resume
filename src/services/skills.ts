import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { FormacaoItem, SkillCategory } from '../models/skills';

@Injectable({
  providedIn: 'root',
})
export class Skills {
  private apiUrl = 'https://resume-api-seven-sigma.vercel.app';
  private http = inject(HttpClient);

  // Cache por idioma
  private skillsCache: Partial<Record<string, Observable<SkillCategory[]>>> = {};
  private formacaoCache$?: Observable<FormacaoItem[]>;

  getSkills(lang: 'pt' | 'en' | 'es' = 'pt'): Observable<SkillCategory[]> {
    if (!this.skillsCache[lang]) {
      this.skillsCache[lang] = this.http
        .get<SkillCategory[]>(`${this.apiUrl}/api/skills`, { params: { lang } })
        .pipe(
          tap((data) => console.log('🌎 Skills OK:', lang, data)),
          shareReplay({ bufferSize: 1, refCount: true }),
        );
    }
    return this.skillsCache[lang]!;
  }

  getFormacao(): Observable<FormacaoItem[]> {
    if (!this.formacaoCache$) {
      this.formacaoCache$ = this.http.get<FormacaoItem[]>(`${this.apiUrl}/api/formacao`).pipe(
        tap((data) => console.log('📘 Formação recebida:', data)),
        shareReplay({ bufferSize: 1, refCount: true }),
      );
    }
    return this.formacaoCache$;
  }
}
