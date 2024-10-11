import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private apiUrl = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) { }

  buscarCep(cep: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${cep}/json`).pipe(
      tap(data => console.log('Dados recebidos da API:', data)),
      map(data => {
        if ('erro' in data) {
          throw new Error('CEP não encontrado');
        }
        return data;
      }),
      catchError(error => {
        console.error('Erro na busca do CEP:', error);
        throw error;
      })
    );
  }
}