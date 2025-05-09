import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private lightModeSubject = new BehaviorSubject<boolean>(false);
  lightMode$ = this.lightModeSubject.asObservable();

  changeTheme(){
    const currentTheme = this.lightModeSubject.value;
    this.lightModeSubject.next(!currentTheme);
    if(currentTheme){
      document.body.style.backgroundColor = "#141c2f";
    }else{
      document.body.style.backgroundColor = "#f5f8ff";
    }
  }
}
