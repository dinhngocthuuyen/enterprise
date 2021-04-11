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
    title: 'Manager student',
    icon: 'shopping-cart-outline',
    link: 'manager/studentmanager',
  },
  {
    title: 'Review',
    icon: 'shopping-cart-outline',
    link: 'coordinators/review',
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
