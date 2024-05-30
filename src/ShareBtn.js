// import React from 'react';
// import facebook from '../../image/facebook.png';

// 네이버, 페이스북 공유하기 버튼

export default function Share ({page}){
    
    function onClickFacebook (){
        window.open(page[0])
    }

    return (
    <div className="Facebook">
        <img 
            onClick={onClickFacebook} 
            alt={`${page[2]} 공유`}
            src = {process.env.PUBLIC_URL + page[1]}
            width={'50px'} 
            height={'50px'}
        />
    </div>
    );
}
