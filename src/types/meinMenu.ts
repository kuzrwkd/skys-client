import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import ChatIcon from '@mui/icons-material/Chat';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export const MAIN_MENU = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: DashboardIcon,
  },
  {
    name: 'NewsFeed',
    href: '/newsfeed',
    icon: NewspaperIcon,
  },
  {
    name: 'Chart',
    href: '/chart',
    icon: CandlestickChartIcon,
  },
  {
    name: 'Customer',
    href: '/customer',
    icon: ChatIcon,
  },
] as const;
