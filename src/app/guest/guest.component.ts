import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { MENU_ITEMS } from './guest-menu';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styles: [`h
:host nb-layout-header button:last-child {
  margin-left: auto;
}
`],
})
export class GuestComponent {
  menu = MENU_ITEMS;
  
  constructor(private sidebarService: NbSidebarService) { }

  toggleCompact() {
    this.sidebarService.toggle(true, 'left');
  }

}
