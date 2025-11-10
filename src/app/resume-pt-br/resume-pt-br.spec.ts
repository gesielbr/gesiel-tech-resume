import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumePtBrComponent } from './resume-pt-br';

describe('ResumePtBrComponent', () => {
  let component: ResumePtBrComponent;
  let fixture: ComponentFixture<ResumePtBrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumePtBrComponent], // Importa o componente para testes
    }).compileComponents();

    fixture = TestBed.createComponent(ResumePtBrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the title 'Meu Currículo em Português'`, () => {
    expect(component.title).toEqual('Meu Currículo em Português');
  });
});
