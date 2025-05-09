import { GithubService } from './../../core/services/github.service';
import { ThemeService } from './../../core/services/theme.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone:false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  islightThemeActive$: Observable<boolean>;
  searchValue: string = "";

    constructor(private themeService:ThemeService){
      this.islightThemeActive$ = themeService.lightMode$;
    }

    searchUser(){
      console.log(this.searchValue);
      // this.githubService.queryUser(this.searchValue)
    }
}
