import { ThemeService } from './../../core/services/theme.service';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  @Input() error: boolean = false;
  
  islightThemeActive$: Observable<boolean>;
  searchValue: string = '';

  constructor(private themeService: ThemeService) {
    this.islightThemeActive$ = themeService.lightMode$;
  }

  @HostListener('document:keydown.enter', ['$event'])
  onEnterPress(event: KeyboardEvent) {
    this.searchUser();  
  }

  searchUser() {
    this.search.emit(this.searchValue.trim());  // Emite o valor de busca
  }
}
