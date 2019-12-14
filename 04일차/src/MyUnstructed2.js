import React from 'react';

/** property에 대한 값이 없을 경우를 대비한 기본값 정의 (함수형) */
const MyUnstructed2 = props => {
    // 비구조 문법을 통해 변수 속성값을 변수로 정의
    const {color, children} = props;

    return (
        <div>
            <font color={color}>{children}</font>
        </div>
    );
};

// 속성들에 대한 기본값을 JSON으로 정의 (객체이름 고정)
MyUnstructed2.defaultProps = {
    color: '#000',
    children: '내용이 없습니다.'
};

export default MyUnstructed2;
