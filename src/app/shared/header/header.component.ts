import { ThemeService } from './../../core/services/theme.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  islightThemeActive$: Observable<boolean>;

  constructor(private themeService:ThemeService){
    this.islightThemeActive$ = themeService.lightMode$;
  }

  toggleTheme(){
    this.themeService.changeTheme();
  }
}
