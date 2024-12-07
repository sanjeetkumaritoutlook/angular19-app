import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-walkthrough-overview',
  templateUrl: './walkthrough-overview.component.html',
})
export class WalkthroughOverviewComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(route: string) {
    this.router.navigate([`walkthroughs/${route}`]);
  }
}
