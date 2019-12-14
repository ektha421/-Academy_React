import React from 'react';

/**
 * 함수 형태의 컴포넌트에서 OnClick 이벤트 핸들러를 별도의 함수로 정의하기
 */
const MyEventHandler1 = () => {
    const [myCount, setMyCount] = React.useState(0);

    const onMyButtonClick = e => {
        // SyntheticEvent 클래스의 객체가 파라미터로 전달된다.
        // -> 웹 브라우저의 이벤트 객체를 Wrappering 한 클래스로서 순수 HTML 이벤트 객체와 동일하게 다룰 수 있다.
        console.log(e);
        setMyCount(myCount + 1);
    };

    return (
        <div>
            <h2>MyEventHandler1</h2>
            <button type='button' onClick={onMyButtonClick}>Click Me</button>
            <p>버튼이 {myCount}회 눌러졌습니다.</p>
            <hr />
        </div>
    );
};

export default MyEventHandler1;