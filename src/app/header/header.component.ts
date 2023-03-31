import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    document.body.style.fontFamily ="Catamaran";
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
    var sunmoon:any = document.getElementById("sunmoon");
    //sunmoon.html = "<i class='fa-thin fa-sun-bright fa-1x'></i>";

  }
  ngOnInit(): void {
  }

}
