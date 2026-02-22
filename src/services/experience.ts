import { inject, Injectable } from '@angular/core';
import { ExperienceModel } from '../models/experience';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Experience {
  private readonly baseUrl = 'https://resume-api-seven-sigma.vercel.app'; // ✅ sem barra no fim
  private http = inject(HttpClient);

  getExperiences(): Observable<ExperienceModel[]> {
    return this.http.get<ExperienceModel[]>(`${this.baseUrl}/api/experiences`).pipe(
      tap((data: ExperienceModel[]) => {
        console.log(
          '✅ Dados de Experiences recebidos da VERCEL com sucesso:',
          JSON.stringify(data, null, 2),
        );
      }),
      catchError((err) => throwError(() => err)),
    );
  }
}
