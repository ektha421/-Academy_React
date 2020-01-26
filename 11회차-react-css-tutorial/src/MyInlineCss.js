import React from 'react';

// /src폴더 하위의 임의의 경로에 존재하는 이미지 파일을 참조
// --> 실행시에는 react에 의해 다른 경로로 복사된다.
import sample from './assets/img/sample.png';

/**
 * MyInlineCss
 * - HTML요소에 inline 방식으로 CSS 적용하기
 */
const MyInlineCss = () => {
    // CSS로 사용될 JSON 객체 정의
    // --> CSS속성이름은 바닐라스크립트의 프로퍼티 이름으로 지정해야 함.
    //     document.getElementById("hello").style.backgroundColor = "#ff00ff";
    const myStyle = {
        backgroundColor: '#f60',
        fontSize: '20px',
        color: '#0f6',
        fontWeight: 'bold',
        padding: '10px 25px',
        marginBottom: '10px'
    };

    return (
        <div>
            <h2>MyInlineCss</h2>

            <h3>이미지 참조하기</h3>
            {/* 이미지 사용시 alt 속성을 지정 안하면 경고 발생함 */}
            <img src={sample} alt='ryan' />
            {/* public 폴더에 있는 파일들은 단순 절대경로로 참조 가능함 (폴더생성 가능) */}
            <img src='/logo192.png' alt='react' />

            <h3>변수로 정의된 CSS 참조하기</h3>
            <div style={myStyle}>Hello React Css (1)</div>

            <h3>직접 CSS 코딩하기</h3>
            <div
                style={{
                    backgroundColor: '#ff0',
                    fontSize: '20px',
                    color: '#00f',
                    fontWeight: 'bold',
                    padding: '10px 25px',
                    marginBottom: '10px'
                }}>
                Hello React Css (2)
            </div>

            <hr />
        </div>
    );
};

export default MyInlineCss;
