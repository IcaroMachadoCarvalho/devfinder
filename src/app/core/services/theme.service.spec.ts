import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';
// import { BehaviorSubject } from 'rxjs';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change theme', (done) => {
    service.changeTheme(); 

    // Assinando o Observable para verificar o valor
    service.lightMode$.subscribe(isDark => {
      expect(isDark).toBeTruthy();
      done(); // Chama o done() para indicar que o teste terminou
    });
  });

  it('should toggle theme correctly', (done) => {
    service.lightMode$.subscribe(isDark => {
      // Espera que o tema inicial seja light (false)
      service.changeTheme();
      expect(isDark).toBeFalsy();
      service.changeTheme();
      expect(isDark).toBeTruthy();
    });
  });
});
