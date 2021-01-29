import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'person-outline',
    },
    {
      title: 'Upload file',
      icon: 'folder-outline',
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
    },
  ];
}

export class SidebarShowcaseComponent {
}

export class MenuShowcaseComponent {

  
}




