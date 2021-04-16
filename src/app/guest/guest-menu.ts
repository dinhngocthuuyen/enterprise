import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    children:[
      {
        title: 'Introduction',
        link: 'introduction'
      },
      {
        title: 'Events',
        link: 'event'
      },
      {
        title: 'Magazine',
        link: 'magazine'
      }
    ]
  },
  {
    title: 'Dashboard',
    icon: 'bookmark-outline',
    link: 'dashboard',
  },

]
