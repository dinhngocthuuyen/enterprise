import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NbSidebarService } from '@nebular/theme';
import { UsersService } from '../shared/header/user.service';
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
export class CoordinatorComponent implements OnInit{
  menu = MENU_ITEMS;
  constructor(private sidebarService: NbSidebarService, private route: ActivatedRoute, private userService: UsersService) { }
  toggleCompact() {
    this.sidebarService.toggle(true, 'left');
  }
  ngOnInit(): void {
    
  }

}
