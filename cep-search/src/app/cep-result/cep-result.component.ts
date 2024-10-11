import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cep-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cep-result.component.html',
  styleUrls: ['./cep-result.component.scss']
})
export class CepResultComponent {
  @Input() cepData: any;
}