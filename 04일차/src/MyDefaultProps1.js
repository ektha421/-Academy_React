import React, { Component } from 'react';

/** property에 대한 값이 없을 경우를 대비한 기본값 정의 */
class MyDefaultProps1 extends Component {
    // 속성들에 대한 기본값을 JSON으로 정의 (객체이름 고정)
    static defaultProps = {
        name: 'unknown',
        age: 0
    };

    render() {
        return (
            <div>
                <h3>MyDefaultProps1</h3>
                <p>
                    제 이름은 <b>{this.props.name}</b>이고 나이는 <b>{this.props.age}</b>입니다.
                </p>
            </div>
        );
    }
}

export default MyDefaultProps1;
