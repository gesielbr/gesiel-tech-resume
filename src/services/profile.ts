import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 👈 Importamos Observable e o 'of'
import { ProfileData } from '../models/profile-data'; // 👈 Importamos a Interface

@Injectable({
  // 'root' torna o serviço disponível em toda a aplicação
  providedIn: 'root',
})
export class Profile {
  // 1. Dados Mocados (simulando a resposta JSON da API)
  private mockProfileData: ProfileData = {
    name: 'Gesiel Souza Oliveira',
    jobTitle: 'Analista de Sistemas | Desenvolvedor Front-end',
    city: 'São Pedro da Aldeia',
    state: 'Rio de Janeiro',
    countryCode: 'BR',
    email: 'gesiel.br@gmail.com',
    phone: '+55 51 99703-2022',
  };

  constructor() {}

  /**
   * Retorna os dados do perfil como um Observable.
   * * 💡 PARA TROCAR PELO BACKEND REAL DEPOIS:
   * 1. Troque a linha abaixo por:
   * return this.http.get<ProfileData>('http://sua-api.com/profile');
   * 2. Injete HttpClient no construtor.
   */
  getProfileData(): Observable<ProfileData> {
    // Usamos 'of()' para criar um Observable que emite o dado mocado
    // Isso imita perfeitamente o comportamento de uma chamada HTTP.
    return of(this.mockProfileData);
  }
}
