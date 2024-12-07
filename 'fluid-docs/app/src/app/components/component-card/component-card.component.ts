import { Component, Input, OnInit } from '@angular/core';
import { ExtendedJsonDocsComponent } from '../../model/extendedJsonDocsComponent';
import { Router } from '@angular/router';
import { ComponentSelector } from '../component-selector.enum';
import { COMPONENT_PAGE } from '../../config/page-url.config';

@Component({
  selector: `${ComponentSelector.COMPONENT_CARD}`,
  templateUrl: './component-card.component.html',
  styleUrls: ['./component-card.component.less'],
})
export class ComponentCardComponent implements OnInit {
  @Input() components: ExtendedJsonDocsComponent[] = [];

  componentCards: { symbol: string; name: string; route: string }[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.componentCards = this.createComponentCards(this.components);
  }

  createComponentCards(components: ExtendedJsonDocsComponent[]) {
    return components.reduce((cards, current) => {
      return current.displayName
        ? [
            ...cards,
            {
              symbol: this.getSymbol(
                current.displayName,
                cards.map((c) => c.symbol)
              ),
              name: current.displayName,
              route: COMPONENT_PAGE(current.tag).route,
            },
          ]
        : cards;
    }, []);
  }

  getSymbol(name: string, allSymbols: string[], digits = 0) {
    const baseSymbol = this.toSymbol(name, digits);
    const multiWord = (name.split(' ') || [])
      .map((split, idx) => this.toSymbol(split, digits, idx % 2 !== 0))
      .join('');
    if (allSymbols.indexOf(baseSymbol) !== -1) {
      if (allSymbols.indexOf(multiWord) !== -1) {
        return this.getSymbol(name, allSymbols, ++digits);
      }
      return multiWord;
    }
    return this.toSymbol(name, digits);
  }

  toSymbol(name: string, digits: number, allLower?: boolean) {
    const symbol =
      name.substring(0, 1).toUpperCase() +
      name.substring(1, digits + 1).toLowerCase();
    return allLower ? symbol.toLowerCase() : symbol;
  }

  searchComponents(searchValue: string) {
    console.log('Searching: ', searchValue);
    this.componentCards = this.createComponentCards(
      this.components.filter((c) => {
        return (
          c.displayName.indexOf(searchValue) !== -1 ||
          c.tag.indexOf(searchValue) !== -1
        );
      })
    );
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  getClass(idx) {
    switch (true) {
      case idx >= 0 && idx <= 15:
        return 'blue';
      case idx >= 16 && idx <= 23:
        return 'yellow';
      case idx >= 24 && idx <= 37:
        return 'red';
      case idx >= 38 && idx <= this.components.length:
        return 'green';
      default:
        return '';
    }
  }
}
