/**
 * Svg
 */
import DashboardIcon from '@/Products/Driver/UI/Icon/dashboard.svg';
import NewsIcon from '@/Products/Driver/UI/Icon/news.svg';
import CustomerIcon from '@/Products/Driver/UI/Icon/message.svg';
import MarketIcon from '@/Products/Driver/UI/Icon/lineChart.svg';

export const MAIN_MENU = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: DashboardIcon,
  },
  {
    name: 'NewsFeed',
    href: '/newsfeed',
    icon: NewsIcon,
  },
  {
    name: 'Market',
    href: '/market',
    icon: MarketIcon,
  },
  {
    name: 'Customer',
    href: '/customer',
    icon: CustomerIcon,
  },
] as const;
