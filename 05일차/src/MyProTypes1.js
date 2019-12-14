import React, { Component } from 'react';

// 컴포넌트 props의 필수 여부를 지정하거나 props의 DataType을 지정할 때 사용
import PropTypes from 'prop-types';

class MyProTypes1 extends Component {
    static defaultProps = {
        name: '기본 이름'
    };

    static propTypes = {
        // name 속성의 데이터 타입 지정
        name: PropTypes.string,
        // favoriteNumber의 데이터 타입과 필수 여부 지정
        favoriteNumber: PropTypes.number.isRequired
    };

    render() {
        const { name, favoriteNumber, children } = this.props; // 비구조화 할당
        return (
            <p>
                안녕하세요, 제 이름은 {name} 입니다. <br />
                children 값은 {children} 입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </p>
        );
    }
}

export default MyProTypes1;
