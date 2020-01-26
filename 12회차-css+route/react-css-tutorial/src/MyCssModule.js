import React from 'react';

import myStyles from './assets/css/mystyle.module.css';

const MyCssModule = () => {
    const avengers = ['아이언맨', '캡틴 아메리카', '토르', '헐크'];

    return (
        <div>
            <h2>MyClassModule</h2>

            <h3>외부 CSS 파일을 통한 클래스 참조하기</h3>

            <ul className={myStyles.world}>
                {avengers.map((item, index) => {
                    return (
                        <li key={index} className={myStyles.hello}>
                            {item}
                        </li>
                    );
                })}
            </ul>

            <h3>CSS 백그라운드 이미지</h3>
            {/* :global 키워드가 적용된 클래스는 정적 클래스로 접근가능함. */}
            <div className='my-css-box' />

            <h3>다중 클래스 적용</h3>
            <div className={`${myStyles.style} ${myStyles.size_x} ${myStyles.size_y}`} />

            <div className={[myStyles.style, myStyles.size_x, myStyles.size_y].join(' ')} />

            <hr />
        </div>
    );
};

export default MyCssModule;
