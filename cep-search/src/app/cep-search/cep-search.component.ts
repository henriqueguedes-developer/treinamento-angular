import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CepService } from '../cep.service';
import { Subject, debounceTime, distinctUntilChanged, switchMap, catchError, of } from 'rxjs';

@Component({
  selector: 'app-cep-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cep-search.component.html',
  styleUrls: ['./cep-search.component.scss']
})
export class CepSearchComponent {
  cep: string = '';
  @Output() resultadoCep = new EventEmitter<any>();
  private cepSubject = new Subject<string>();

  constructor(private cepService: CepService) {
    this.cepSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(cep => this.cepService.buscarCep(cep).pipe(
        catchError(error => {
          console.error('Erro ao buscar CEP:', error);
          return of(null);
        })
      ))
    ).subscribe(resultado => {
      console.log('Resultado da busca:', resultado);
      this.resultadoCep.emit(resultado);
    });
  }

  formatarCep() {
    this.cep = this.cep.replace(/\D/g, '');
    if (this.cep.length > 5) {
      this.cep = this.cep.substring(0, 5) + '-' + this.cep.substring(5, 8);
    }
    if (this.cep.length === 9) {
      this.cepSubject.next(this.cep);
    }
  }

  buscarCep() {
    if (this.cep) {
      this.cepSubject.next(this.cep);
    }
  }
}