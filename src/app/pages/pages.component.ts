import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-pages',
  template: `
  <nb-layout>
    <nb-layout-header fixed>
    <nb-icon (click)="toggleCompact()" icon="menu-outline"></nb-icon>
    <h3>Enterprise Web</h3>
    </nb-layout-header>

  <nb-sidebar tag="left">
  <nb-menu [items]="menu"></nb-menu>
  </nb-sidebar>

  <nb-layout-column >
  <router-outlet></router-outlet>
  </nb-layout-column>
</nb-layout>
  `,
styles: [`
:host nb-layout-header button:last-child {
  margin-left: auto;
}
`],
})
export class PagesComponent  {

  menu = MENU_ITEMS;
  constructor(private sidebarService: NbSidebarService) {
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'left');
  }
}
