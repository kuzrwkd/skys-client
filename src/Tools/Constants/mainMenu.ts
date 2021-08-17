/**
 * Svg
 */
import DashboardIcon from '@/Products/Driver/UI/Icon/dashboard.svg';
import MessageIcon from '@/Products/Driver/UI/Icon/message.svg';

export const MENU = [
  {
    name: 'Dashboard',
    href: '/',
    icon: DashboardIcon,
  },
  {
    name: 'Message',
    href: '/message',
    icon: MessageIcon,
  },
] as const;
