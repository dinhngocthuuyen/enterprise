import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { MENU_ITEMS } from './admin-menu';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
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
export class AdminComponent {
  menu = MENU_ITEMS;
  constructor(private sidebarService: NbSidebarService) { }

  toggleCompact() {
    this.sidebarService.toggle(true, 'menu-sidebar');
    // this.layoutService.changeLayoutSize();

    // return false;
  }

}
