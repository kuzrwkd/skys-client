/**
 * Svg
 */
import DashboardIcon from '@/Products/Driver/UI/Icon/dashboard.svg';
import NewsIcon from '@/Products/Driver/UI/Icon/news.svg';
import MessageIcon from '@/Products/Driver/UI/Icon/message.svg';

export const MENU = [
  {
    name: 'Dashboard',
    href: '/',
    icon: DashboardIcon,
    className: 'h-8 w-8 fill-current text-blue-800',
  },
  {
    name: 'News',
    href: '/news',
    icon: NewsIcon,
    className: 'h-8 w-8 fill-current text-blue-800',
  },
  {
    name: 'Message',
    href: '/message',
    icon: MessageIcon,
    className: 'h-8 w-8 fill-current text-blue-800',
  },
] as const;
