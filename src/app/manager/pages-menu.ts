import { ListKeyManager } from '@angular/cdk/a11y';
import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Contributions',
    icon: 'file-text-outline',
    link: 'view-topics'
  },
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: 'dashboard',
    home: true,
  },
  {
    title: 'Login',
    icon: 'shopping-cart-outline',
    link: 'login',
  },

  {
    title: 'Faculty',
    icon: 'home-outline',
    link: 'faculty',
  },
  {
    title: 'Manager student',
    icon: 'shopping-cart-outline',
    link: 'manager/studentmanager',
  },

  {
    title: 'Admin',
    icon: 'person-outline',
    link: 'admin',
  },

  {
    title: 'Student',
    icon: 'home-outline',
    link: 'student',
  },
  {
    title: 'Review',
    icon: 'shopping-cart-outline',
    link: 'coordinators/review',
  },
  {
    title: 'Update Profile',
    icon: 'shopping-cart-outline',
    link: 'coordinators/profile',
  },
  {
    title: 'Chat',
    icon: 'message-circle-outline',
    link: 'chat',
  },

  {
    title: 'View Profile',
    icon: 'eye-outline',
    link: 'viewprofile',
  },

  {
    title: 'Download',
    icon: 'download-outline',
    link: 'download',
  },
]
