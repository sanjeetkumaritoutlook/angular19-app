import { Component } from '@angular/core';
import {TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate-text',
  imports: [TranslateModule], // Import TranslateModule
  templateUrl: './translate-text.component.html',
  styleUrl: './translate-text.component.scss'
})
export class TranslateTextComponent {
  constructor(private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('en');

      // Use browser's language or fallback
      const browserLang = this.translate.getBrowserLang() || 'en';
      this.translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
