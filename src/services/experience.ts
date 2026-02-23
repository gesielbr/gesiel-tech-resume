import { inject, Injectable } from '@angular/core';
import { ExperienceModel } from '../models/experience';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private readonly baseUrl = 'https://resume-api-seven-sigma.vercel.app'; // ✅ sem barra no fim
  private http = inject(HttpClient);

  constructor(private translate: TranslateService) {}

  getExperiences(lang: string): Observable<ExperienceModel[]> {
    const url = `${this.baseUrl}/api/experiences?lang=${lang}`;

    return this.http.get<ExperienceModel[]>(url).pipe(
      tap((data) => console.log(`✅ Experiências recebidas (lang=${lang}):`, data)),
      catchError((err) => throwError(() => err)),
    );
  }
}
