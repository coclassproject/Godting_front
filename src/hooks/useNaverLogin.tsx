import { useRouter } from 'next/router';
import React from 'react';

const useNaverLogin = () => {
  const router = useRouter();
  console.log(router.asPath);

  if (router.asPath.includes('access_token')) {
    const responseData = router.asPath.split('#')[1].split('&');
    const tokenObj = {
      access_token: responseData[0].split('=')[1],
      state: responseData[1].split('=')[1],
      token_type: responseData[2].split('=')[1],
      expires_in: responseData[3].split('=')[1],
    };

    console.log(tokenObj);
  }
};

export default useNaverLogin;
