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
    const url = `${this.baseUrl}/api/experiences?ts=${Date.now()}`;

    return this.http.get<ExperienceModel[]>(url).pipe(
      tap((data) => console.log('✅ Experiences:', data)),
      catchError((err) => throwError(() => err)),
    );
  }
}
