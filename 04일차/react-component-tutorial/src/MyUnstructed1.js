import React, { Component } from 'react';

/** property에 대한 값이 없을 경우를 대비한 기본값 정의 */
class MyUnstructed1 extends Component {
    // 속성들에 대한 기본값을 JSON으로 정의 (객체이름 고정)
    static defaultProps = {
        color: '#000',
        children: '내용이 없습니다.'
    };

    render() {
        // 속성값들을 미리 개별적으로 사용할 수 있도록 정의함.
        const { color, children } = this.props;
        return (
            <div>
                <font color={color}>{children}</font>
            </div>
        );
    }
}

export default MyUnstructed1;
