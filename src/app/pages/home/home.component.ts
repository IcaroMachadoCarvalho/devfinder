import { GithubService } from '../../core/services/github.service';
import { ThemeService } from './../../core/services/theme.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  islightThemeActive$: Observable<boolean>;
  userData:any = "";
  error:boolean = true;

  constructor(private themeService:ThemeService, private githubService: GithubService){
    this.islightThemeActive$ = themeService.lightMode$;
  }

  ngOnInit(): void {
      this.getUserInfo("octocat");
  }

  getUserInfo(searchValue: string): void {
    this.githubService.queryUser(searchValue)
    .subscribe({
      next: (response) => {
        this.error = false;
        if (response) {
          this.userData = response;
        } else {
          console.log('No user data returned');
        }
      },
      error: (error) => {
        this.error = true;
        console.log('Subscription error:', error);
      }
    });
  }
}
