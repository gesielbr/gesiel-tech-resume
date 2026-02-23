import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ExperienceModel } from '../models/experience';

type Lang = 'pt' | 'en' | 'es';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  @Input() experiences: ExperienceModel[] = [];

  constructor(private translate: TranslateService) {}

  /** Pega o idioma atual com fallback seguro */
  private getLang(): Lang {
    const lang = (this.translate.currentLang || this.translate.defaultLang || 'pt').toLowerCase();
    return lang === 'en' || lang === 'es' || lang === 'pt' ? (lang as Lang) : 'pt';
  }

  /**
   * Escolhe a descrição correta quando o back envia
   * description_en / description_es além de description (pt).
   */
  getDescription(exp: any): string[] {
    const lang = this.getLang();

    if (lang === 'en' && Array.isArray(exp?.description_en)) return exp.description_en;
    if (lang === 'es' && Array.isArray(exp?.description_es)) return exp.description_es;

    return Array.isArray(exp?.description) ? exp.description : [];
  }

  /**
   * Mesma ideia para o job title
   * (alguns seus registros estão vazios em en/es, então cai no pt).
   */
  getJobTitle(exp: any): string {
    const lang = this.getLang();

    const clean = (v: any) => (typeof v === 'string' ? v.replace(/^"+|"+$/g, '').trim() : '');

    if (lang === 'en') return clean(exp?.job_title_en) || clean(exp?.job_title) || '';
    if (lang === 'es') return clean(exp?.job_title_es) || clean(exp?.job_title) || '';

    return clean(exp?.job_title) || '';
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);

    const lang = (this.translate.currentLang || this.translate.defaultLang || 'pt').toLowerCase();

    const localeMap: Record<string, string> = {
      pt: 'pt-BR',
      en: 'en-US',
      es: 'es-ES',
    };

    const locale = localeMap[lang] || 'pt-BR';

    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      timeZone: 'UTC',
    }).format(date);
  }
}
