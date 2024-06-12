// KakaoShare.jsx

export default function KakaoShare() {

  const kakaoButton = () => {
    if (window.Kakao) {

      const kakao = window.Kakao;

      // 초기화
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_SHARE_KEY);
      }

      // 공유하기
      kakao.Share.sendDefault({
        // container: '#kakaotalk-sharing-btn',
        objectType: 'feed',
        // description: '룰렛 돌리고 100% 당첨되는 보상 받기!',

        content: {
          title : '로이드밤이 시원~한 이벤트 쏩니다!',
          description: '더운 여름, 꽝 없는 룰렛 이벤트 참여하고 푸짐한 상품 받아가세요!', 
          imageUrl : 'https://modo-phinf.pstatic.net/20210825_228/1629883956341vkLT1_JPEG/mosaeohCfg.jpeg?type=f320_320',
          link : {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        buttons: [
          {
            title : '지금 상품 받으러가기',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
        ],
      });
    }
  }
	
	return (
    <div style={{cursor:'pointer'}}>
  		<img 
        id='kakaotalk-sharing-btn' 
        alt='카카오톡 공유' 
        src={process.env.PUBLIC_URL + '/kakao.webp'} 
        width={'50px'} 
        height={'50px'}
        onClick={()=>{kakaoButton()}}
      />
    </div>
	)
}