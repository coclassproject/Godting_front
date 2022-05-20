import axios from 'axios';
import { useRouter } from 'next/router';

const useKakaoLogin = async () => {
  const router = useRouter();
  const redirectUri = 'http://localhost:3000/sign_in';
  const { code } = router.query;

  if (code) {
    try {
      const { data } = await axios.get(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_ID}&redirect_uri=${redirectUri}&code=${code}`,
      );
      console.log(data);
      //   const { data: loginData } = await axios.post('backend', data); // 카카오 토큰 백엔드 전달
    } catch (error) {
      console.error(error);
    }
  }
};

export default useKakaoLogin;
