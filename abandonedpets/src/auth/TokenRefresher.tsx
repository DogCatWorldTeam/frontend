import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function TokenRefresher() {
  const navigate = useNavigate();

  useEffect(() => {
    const refreshAPI = axios.create({
      baseURL: 'http://localhost:8080/api/v1',
      headers: { 'Content-Type': 'application/json' }, // header의 Content-Type을 JSON 형식의 데이터를 전송한다
    });

    const interceptor = axios.interceptors.response.use(
      // 성공적인 응답 처리
      (response) => {
        // console.log('Starting Request', response)
        return response;
      },
      async (error) => {
        const originalConfig = error.config; // 기존에 수행하려고 했던 작업
        const { message } = error.response.data; // error msg from backend
        const { status } = error.response; // 현재 발생한 에러 코드
        // access_token 재발급
        if (status === 400) {
          if (message === '토큰이 유효하지 않습니다.') {
            // console.log("토큰 재발급 요청");
            await axios
              .post(
                `http://localhost:8080/api/v1/users/reissue`,
                {},
                {
                  headers: {
                    Authorization: `${localStorage.getItem('accessToken')}`,
                  },
                },
              )
              .then((res) => {
                // console.log("res : ", res);
                // 새 토큰 저장
                localStorage.setItem('accessToken', res.headers.authorization);
                localStorage.setItem('Refresh', res.headers.refresh);

                // 새로 응답받은 데이터로 토큰 만료로 실패한 요청에 대한 인증 시도 (header에 토큰 담아 보낼 때 사용)
                originalConfig.headers.authorization = `Bearer ${res.headers.authorization}`;

                // console.log("New access token obtained.");
                // 새로운 토큰으로 재요청
                return refreshAPI(originalConfig);
              })
              .catch(() => {
                console.error(
                  'An error occurred while refreshing the token:',
                  error,
                );
              });
          }
          // refresh_token 재발급과 예외 처리
          // else if(msg == "만료된 리프레시 토큰입니다") {
          else {
            localStorage.clear();
            alert('다시 로그인 해주세요');
            navigate('/login');
            // window.alert("토큰이 만료되어 자동으로 로그아웃 되었습니다.")
          }
        } else if (status === 400 || status === 404 || status === 409) {
          // window.alert(msg);
          // console.log(msg)
        }
        // console.error('Error response:', error);
        // 다른 모든 오류를 거부하고 처리
        return Promise.reject(error);
      },
    );
    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, []);
  return <div></div>;
}