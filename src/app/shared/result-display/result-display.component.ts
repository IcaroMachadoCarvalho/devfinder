import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-result-display',
  standalone: false,
  templateUrl: './result-display.component.html',
  styleUrl: './result-display.component.scss',
})
export class ResultDisplayComponent implements OnInit {
  @Input() userResponse: any;

  islightThemeActive$: Observable<boolean>;

  constructor(private themeService: ThemeService) {
    this.islightThemeActive$ = themeService.lightMode$;
  }

  ngOnInit() {
    console.log(this.userResponse);
  }
}
