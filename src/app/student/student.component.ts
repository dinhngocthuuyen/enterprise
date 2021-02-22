import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { MENU_ITEMS } from './student-menu';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [`h
:host nb-layout-header button:last-child {
  margin-left: auto;
}
`],
})
export class StudentComponent {
  menu = MENU_ITEMS;
  constructor(private sidebarService: NbSidebarService) { }

  toggleCompact() {
    this.sidebarService.toggle(true, 'left');
  }

}
