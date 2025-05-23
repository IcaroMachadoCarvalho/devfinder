import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { ThemeService } from './../../core/services/theme.service';
import { of } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let mockThemeService: Partial<ThemeService>;

  beforeEach(async () => {
    // Mock do ThemeService
    mockThemeService = {
      lightMode$: of(true),  // Emulando o valor do Observable (por exemplo, "true" significa que o tema claro está ativo)
    };

    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [
        { provide: ThemeService, useValue: mockThemeService }  // Usando o mock
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Inicializa o componente e detecta mudanças
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('should call the method searchUser', () => {
    const spy = jest.spyOn(component, 'searchUser');
    const searchButton = fixture.nativeElement.querySelector('button');

    searchButton.click();

    expect(spy).toHaveBeenCalled();
  });

  it('deve emitir o valor de busca ao chamar searchUser()', () => {
    const emitSpy = jest.spyOn(component.search, 'emit');
    component.searchValue = 'valor de busca';

    component.searchUser(); // Chama o método que emite o evento

    expect(emitSpy).toHaveBeenCalledWith('valor de busca'); // Verifica se o valor foi emitido corretamente
  });

  it('deve chamar searchUser ao pressionar Enter', () => {
    const spy = jest.spyOn(component, 'searchUser');
    const event = new KeyboardEvent('keydown', { key: 'Enter' });

    component.onEnterPress(event);  // Simula o pressionamento da tecla Enter

    expect(spy).toHaveBeenCalled();  // Verifica se o método foi chamado
  });

  it('deve emitir um valor vazio quando searchUser for chamado com valor vazio', () => {
    const emitSpy = jest.spyOn(component.search, 'emit');
    component.searchValue = '';  // Define um valor vazio

    component.searchUser();  // Chama o método que emite o evento

    expect(emitSpy).toHaveBeenCalledWith('');  // Verifica se o valor vazio foi emitido
  });

  it('deve refletir a propriedade lightMode$ do serviço', () => {
    component.islightThemeActive$.subscribe((value) => {
      expect(value).toBe(true); // Verifica se o valor de lightMode$ é true, conforme o mock
    });
  });
});
