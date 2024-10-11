import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepResultComponent } from './cep-result.component';

describe('CepResultComponent', () => {
  let component: CepResultComponent;
  let fixture: ComponentFixture<CepResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CepResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CepResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
