import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Login',
    icon: 'shopping-cart-outline',
    link: '/pages/login',
  },

  {
    title: 'Faculty',
    icon: 'home-outline',
    link: '/pages/faculty',
  },
  {
    title: 'Manager student',
    icon: 'shopping-cart-outline',
    link: '/pages/manager/studentmanager',
  },

  {
    title: 'Admin',
    icon: 'person-outline',
    link: '/pages/admin',
  },

  {
    title: 'Student',
    icon: 'home-outline',
    link: '/pages/student',
  },
  {
    title: 'Review',
    icon: 'shopping-cart-outline',
    link: '/pages/coordinators/review',
  },
  {
    title: 'Update Profile',
    icon: 'shopping-cart-outline',
    link: '/pages/coordinators/profile',
  },
  {
    title: 'Guest',
    icon: 'person-outline',
    link: '/pages/guest',
  },

  {
    title: 'Chat',
    icon: 'message-circle-outline',
    link: '/pages/chat',
  },

]
