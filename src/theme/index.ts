const URL = 'http://localhost:3000';

const responsiveView = {
  HDPC: '1536px',
  PC: '1280px',
  NOTEBOOK: '1024px',
  TABLET: '768px',
  MOBILE: '640px',
};

export const lightTheme = {
  TITLE_BLACK_COLOR: '#212121', // 퍼블릭 블랙, 제목 및 글의 중심이 되는 부분에 사용
  SUBTITLE_AND_CONTENT_COLOR: '#666666', // 부제목 및 본문 내용에 사용
  ICON_COLOR_AND_BOTTOM_CONTENT: '#9E9E9E', // 아이콘 색상 및 제일 하위의 내용에 사용,
  LINE_WHITE_COLOR: '#f5f5f5', // 라인,
  BUTTON_BACKGROUND_COLOR: '#EFEFEF', // 버튼 백그라운드,
  PUBLIC_BLUE: '#3D00FC',
  PUBLIC_WHITE: '#fff',
  PUBLIC_LIGHTGREY: '#C4C4C4',
  LAYOUT_BACKGROUND_COLOR: '#f2f4f6',
  LAYOUT_WHITE_COLOR: '#ffffff',
  SUB_BACKGROUND_COLOR: '#F8F8FA',
  VALIDATION_COLOR: '#ff0a0a',
  HDPC: `(min-width: ${responsiveView.HDPC})`,
  PC: `(min-width: ${responsiveView.PC})`,
  NOTEBOOK: `(min-width: ${responsiveView.NOTEBOOK})`,
  TABLET: `(min-width: ${responsiveView.TABLET})`,
  MOBILE: `(min-width: ${responsiveView.MOBILE})`,
};

export type ThemeType = typeof lightTheme;
