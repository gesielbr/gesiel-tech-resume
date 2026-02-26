import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ExperienceModel } from '../models/experience';

type Lang = 'pt' | 'en' | 'es';

type ExperienceView = ExperienceModel & {
  view_job_title: string;
  view_description: string[];
  view_start: string;
  view_end: string;
};

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent implements OnChanges {
  @Input() experiences: ExperienceModel[] = [];

  // ✅ o template deve usar isso
  viewExperiences: ExperienceView[] = [];

  constructor(private translate: TranslateService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['experiences']) {
      this.viewExperiences = this.experiences.map((exp) => this.toView(exp));
    }
  }

  /** Idioma atual com fallback seguro (calculado 1x por conversão) */
  private getLang(): Lang {
    const lang = (this.translate.currentLang || this.translate.defaultLang || 'pt').toLowerCase();
    return lang === 'en' || lang === 'es' || lang === 'pt' ? (lang as Lang) : 'pt';
  }

  private clean(v: any): string {
    return typeof v === 'string' ? v.replace(/^"+|"+$/g, '').trim() : '';
  }

  private pickJobTitle(exp: any, lang: Lang): string {
    if (lang === 'en') return this.clean(exp?.job_title_en) || this.clean(exp?.job_title) || '';
    if (lang === 'es') return this.clean(exp?.job_title_es) || this.clean(exp?.job_title) || '';
    return this.clean(exp?.job_title) || '';
  }

  private pickDescription(exp: any, lang: Lang): string[] {
    if (lang === 'en' && Array.isArray(exp?.description_en)) return exp.description_en;
    if (lang === 'es' && Array.isArray(exp?.description_es)) return exp.description_es;
    return Array.isArray(exp?.description) ? exp.description : [];
  }

  private formatMonthYear(dateString: string | null | undefined, lang: Lang): string {
    if (!dateString) return '';

    const localeMap: Record<Lang, string> = {
      pt: 'pt-BR',
      en: 'en-US',
      es: 'es-ES',
    };

    return new Intl.DateTimeFormat(localeMap[lang], {
      year: 'numeric',
      month: 'long',
      timeZone: 'UTC',
    }).format(new Date(dateString));
  }

  private presentLabel(lang: Lang): string {
    if (lang === 'en') return 'Present';
    if (lang === 'es') return 'Actualidad';
    return 'Atual';
  }

  private toView(exp: ExperienceModel): ExperienceView {
    const lang = this.getLang();
    const anyExp = exp as any;

    const view_job_title = this.pickJobTitle(anyExp, lang);
    const view_description = this.pickDescription(anyExp, lang);

    const view_start = this.formatMonthYear(anyExp?.start_date, lang);
    const view_end = anyExp?.current_job
      ? this.presentLabel(lang)
      : this.formatMonthYear(anyExp?.end_date, lang);

    return {
      ...anyExp,
      view_job_title,
      view_description,
      view_start,
      view_end,
    };
  }
}
