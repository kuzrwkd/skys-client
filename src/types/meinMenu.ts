import DashboardIcon from '@/static/icon/dashboard.svg';
import NewsIcon from '@/static/icon/news.svg';
import CustomerIcon from '@/static/icon/message.svg';
import MarketIcon from '@/static/icon/lineChart.svg';

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
