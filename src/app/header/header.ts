import { Component, OnInit } from '@angular/core';
import { ProfileData } from '../../models/profile-data';
import { Profile } from '../../services/profile';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    this.loadProfileData();
  }

  // 1. Variável que guardará os dados e será usada no HTML
  // Inicializada com valores vazios para evitar erros de leitura antes da API responder
  profileData: ProfileData = {
    name: '',
    jobTitle: '',
    city: '',
    state: '',
    countryCode: '',
    email: '',
    phone: '',
  };
  // Você pode adicionar propriedades aqui se quiser tornar dados dinâmicos
  /* name = 'Gesiel Souza Oliveira';
  jobTitle = 'Analista de Sistemas | Desenvolvedor Front-end';
  location = 'São Pedro da Aldeia, Rio de Janeiro - Brasil';
  email = 'gesiel.br@gmail.com';
  phone = '+55 51 997032022'; */

  constructor(
    private profileService: Profile,
    private translate: TranslateService,
  ) {}

  loadProfileData(): void {
    // 4. Chamada do serviço e Inscrição (Subscription) para receber o dado
    this.profileService.getProfileData().subscribe({
      next: (data: ProfileData) => {
        // 5. O dado mocado foi recebido e atribuído à variável do componente
        this.profileData = data;
      },
      error: (err) => {
        // Em um cenário real, trataria o erro da API aqui
        console.error('Erro:', err);
      },
    });
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  get currentLang(): string {
    return this.translate.currentLang || this.translate.defaultLang || 'pt';
  }
}
