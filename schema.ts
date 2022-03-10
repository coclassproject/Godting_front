import { HiClipboardList, HiOutlineClipboardList } from 'react-icons/hi';
import { RiCoupon3Fill, RiCoupon3Line, RiUser3Fill, RiUser3Line } from 'react-icons/ri';
import { TiHome, TiHomeOutline } from 'react-icons/ti';

export const menus = {
  home: {
    icon: TiHomeOutline,
    activeIcon: TiHome,
    title: '홈',
    path: '/',
  },
  items: {
    icon: HiOutlineClipboardList,
    activeIcon: HiClipboardList,
    title: '주문내역',
    path: '/orders',
  },
  users: {
    icon: RiCoupon3Line,
    activeIcon: RiCoupon3Fill,
    title: '쿠폰',
    path: '/coupons',
  },
  mypage: {
    icon: RiUser3Line,
    activeIcon: RiUser3Fill,
    title: '마이페이지',
    path: '/users/mypage',
  },
};
