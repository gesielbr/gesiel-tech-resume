import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';
import 'zone.js'; // ⬅️ OBRIGATÓRIO

import { provideHttpClient, withFetch } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

// 🔹 Factory que carrega os arquivos de tradução (i18n)
export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    './assets/i18n/', // /adicionado/ caminho explícito
    '.json',
  );
}

export const appConfig: ApplicationConfig = {
  providers: [
    // 🔹 Rotas da aplicação
    provideRouter(routes),

    // 🔹 Hidratação (SSR / SSG) – mantém como está
    provideClientHydration(withEventReplay()),

    // 🔹 HttpClient global usando fetch (ótima escolha 👍)
    provideHttpClient(withFetch()),

    // 🔹 ngx-translate GLOBAL (pipe disponível em todos os componentes)
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'pt', // /adicionado/ idioma padrão da aplicação
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ),
  ],
};
