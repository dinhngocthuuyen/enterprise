import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { AuthService } from '../services/auth.service';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-pages',
  templateUrl: 'pages.component.html',
styles: [`h
:host nb-layout-header button:last-child {
  margin-left: auto;
}
#header {
  /* display: flex;
  justify-content: space-between;
  width: 100% */
}
`],
})
export class PagesComponent  {

  currentUser: any;
  menu = MENU_ITEMS;
  constructor(private sidebarService: NbSidebarService,
    private authService: AuthService
  ) {
    // this.currentUser = AuthService.currentUserValue;
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'left');
  }
}
