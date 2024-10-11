import { Component } from '@angular/core';
import { CepSearchComponent } from './cep-search/cep-search.component';
import { CepResultComponent } from './cep-result/cep-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CepSearchComponent, CepResultComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  resultadoCep: any;

  atualizarResultado(resultado: any) {
    this.resultadoCep = resultado;
  }
}