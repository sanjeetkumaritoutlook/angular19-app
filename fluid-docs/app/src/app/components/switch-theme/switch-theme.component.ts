import { Component, Input, OnInit } from '@angular/core';
import { ThemeProviderService } from '../../services/theme-provider.service';
import { ComponentSelector } from '../component-selector.enum';

@Component({
  selector: `${ComponentSelector.SWITCH_THEME}`,
  templateUrl: './switch-theme.component.html',
})
export class SwitchThemeComponent implements OnInit {
  @Input() switchTo: string;
  @Input() label: string;
  @Input() altLabel: string;

  theme: string;

  constructor(private themeService: ThemeProviderService) {}

  ngOnInit(): void {
    this.themeService.getTheme().subscribe((theme) => {
      this.theme = theme;
    });
  }

  switchTheme() {
    this.themeService.setTheme(this.switchTo);
  }
}
