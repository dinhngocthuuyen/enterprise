import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-pages',
  templateUrl: 'pages.component.html',
styles: [`h
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
