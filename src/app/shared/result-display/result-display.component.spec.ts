import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultDisplayComponent } from './result-display.component';
import { ThemeService } from '../../core/services/theme.service';
import { of } from 'rxjs';

describe('ResultDisplayComponent', () => {
  let component: ResultDisplayComponent;
  let fixture: ComponentFixture<ResultDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultDisplayComponent],
      providers: [
        {
          provide: ThemeService,
          useValue: {
            lightMode$: of(true),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultDisplayComponent);
    component = fixture.componentInstance;

    // 🟢 Aqui você simula a entrada @Input que o componente espera
    component.userResponse = {
      name: 'Exemplo de Nome',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
