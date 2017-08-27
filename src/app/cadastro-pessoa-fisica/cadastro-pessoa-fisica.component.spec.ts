import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPessoaFisicaComponent } from './cadastro-pessoa-fisica.component';

describe('CadastroPessoaFisicaComponent', () => {
  let component: CadastroPessoaFisicaComponent;
  let fixture: ComponentFixture<CadastroPessoaFisicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPessoaFisicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
