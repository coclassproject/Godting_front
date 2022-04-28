import { HiClipboardList, HiOutlineClipboardList } from 'react-icons/hi';
import { RiCoupon3Fill, RiCoupon3Line, RiUser3Fill, RiUser3Line } from 'react-icons/ri';
import { TiHome, TiHomeOutline } from 'react-icons/ti';

export const REGION = ['서율', '경기', '인천', '부산', '경남'];
export const PARTICIPANT = [2, 3, 4]; // 미팅방 생성 시 팀 인원
export const COLLEGE_NUMBER = [15, 16, 17, 18, 19, 20, 21, 22]; // 미팅방 생성 시 학번

export const INTEREST = [
  '독서',
  '글쓰기',
  '공예',
  '사진',
  '그림',
  '스포츠',
  '자동차',
  '팬클럽',
  '방송/연예',
  '맛집/요리',
  '애니메이션',
  '웹툰',
  '다이어트',
  '반려동물',
  '여행',
  '패션',
  '뷰티',
  '음악',
  '공연',
  '전시회',
  '어학',
  '취업',
  'IT/컴퓨터',
  '경제/재태크',
  '유머/짤',
  '게임',
];

export const DEPARTMENT_LIST = [
  ['기독교학부', 'CHRISTIAN_STUDIES'],
  ['어문학부', 'LANGUAGE_LITERATURE'],
  ['사회복지학부', 'SOCIAL_WELFARE'],
  ['경찰학부', 'POLICE_SCIENCE'],
  ['경상학부', 'BUSINESS_COMMERCE'],
  ['관광학부', 'TOURISM'],
  ['사범학부', 'EDUCATION'],
  ['컴퓨터공학부', 'COMPUTER_ENGINEERING'],
  ['보건학부', 'HEALTH_SCIENCE'],
  ['간호학과', 'NURSING_SCIENCE'],
  ['디자인영상학부', 'DESIGN_IMAGING'],
  ['스포츠과학부', 'SPORTS_SCIENCE'],
  ['문화예술학부', 'CULTURE_ART'],
];

export const MajorObj = [
  ['신학과', '미디어선교학과', '기독교교육학과', '기독교상담학과'],
  ['국어국문학과', '영어학과', '일본어학과', '중국어학과', '러시아어학과'],
  ['사회복지학과', '아동복지학과', '청소년학과', '노인복지학괴'],
  ['경찰행정학과', '범죄학과', '교정보안학과', '법학과', '행정학과'],
  ['경영학과', '회계학과', 'e-비지니스학과', '국제통상학과'],
  ['관광경영학과', '호텔경영학과', '글로벌호텔비즈니스과', '항공서비스과'],
  ['유아교육학과', '특수교욱과', '유아특수교육과', '특수체육교육과'],
  ['소프트웨어학과', '멀티미디어학과', '정보통신학과', '정보보호학과', '인공지능학과'],
  ['물리치료학과', '안경광학과', '응급구조학과', '치위생학과', '작업치료학과'],
  ['간호학과'],
  ['시각디자인과', '산업디자인과', '영상애니메이션과', '인테리어디자인과', '문화상품디자인연계과'],
  ['레저스포츠산업과', '스포츠건강관리과', '생활스포츠과', '태권도과'],
  ['피아노', '뮤지컬', '실용음악', '연기예술'],
];

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
    path: '/match',
  },
  test: {
    icon: RiUser3Line,
    activeIcon: RiUser3Fill,
    title: '채팅',
    path: '/users/mypage',
  },
};
