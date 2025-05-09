import { ThemeService } from './../../core/services/theme.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  islightThemeActive$: Observable<boolean>;

  constructor(private themeService:ThemeService){
    this.islightThemeActive$ = themeService.lightMode$;
  }
}
