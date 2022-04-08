import { HiClipboardList, HiOutlineClipboardList } from 'react-icons/hi';
import { RiCoupon3Fill, RiCoupon3Line, RiUser3Fill, RiUser3Line } from 'react-icons/ri';
import { TiHome, TiHomeOutline } from 'react-icons/ti';

export const menus = {
  home: {
    icon: TiHomeOutline,
    activeIcon: TiHome,
    title: '팀 만들기',
    path: '/team/new',
  },
  items: {
    icon: HiOutlineClipboardList,
    activeIcon: HiClipboardList,
    title: '미팅',
    path: '/orders',
  },
  users: {
    icon: RiCoupon3Line,
    activeIcon: RiCoupon3Fill,
    title: '1:1 소개',
    path: '/',
  },
  mypage: {
    icon: RiUser3Line,
    activeIcon: RiUser3Fill,
    title: '매칭',
    path: '/users/mypage',
  },
  test: {
    icon: RiUser3Line,
    activeIcon: RiUser3Fill,
    title: '채팅',
    path: '/users/mypage',
  },
};
