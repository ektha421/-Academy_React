import React from 'react';
import styled, {css} from 'styled-components';

// <button> 태그 기반의 컴포넌트 MyButton를 정의
const MyButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    &:active {
        transform: translateY(2px) scale(0.95, 0.95);
    }

    /** props를 사용하여 글자 색상과 border 색상 적용 */
    color: ${props => props.myColor};
    border: 2px solid ${props => props.myColor};
`;

// MyButton의 props에 대한 기본값들을 갖는 JSON
MyButton.defaultProps = {
    myColor: '#DB7093'
};

// 그냥 변수
const MyTheme = '#3CB371';

const MyStyledComponent2 = () => {
    return (
        <div>
            <h2>MyStyledComponent2</h2>

            <MyButton>Normal</MyButton>
            <MyButton myColor={MyTheme}>MyTheme</MyButton>
            <MyButton myColor='#f60'>Color</MyButton>
        </div>
    );
};

export default MyStyledComponent2;
