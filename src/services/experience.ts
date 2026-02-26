import { inject, Injectable } from '@angular/core';
import { ExperienceModel } from '../models/experience';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private readonly baseUrl = 'https://resume-api-seven-sigma.vercel.app';
  private http = inject(HttpClient);

  getExperiences(lang: string): Observable<ExperienceModel[]> {
    const url = `${this.baseUrl}/api/experiences?lang=${lang}`;

    return this.http.get<ExperienceModel[]>(url).pipe(catchError((err) => throwError(() => err)));
  }
}
