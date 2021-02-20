import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { MENU_ITEMS } from './coordinator-menu';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
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
export class CoordinatorComponent {
  menu = MENU_ITEMS;
  constructor(private sidebarService: NbSidebarService) { }

  toggleCompact() {
    this.sidebarService.toggle(true, 'left');
  }

}
