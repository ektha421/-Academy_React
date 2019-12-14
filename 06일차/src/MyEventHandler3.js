/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

/**
 * MyEventHandler2의 내용을 클래스 형식으로 정의하기
 */
class MyEventHandler3 extends React.Component {
    state = {
        'myCount': 0
    };

    constructor(prop) {
        super(prop);

        // 클래스의 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서
        // 메서드와 this 관계가 끊어져 버리는 것을 방지하는 코드
        this.onMyLickClick = this.onMyLickClick.bind(this);
    }

    /** 이벤트 핸들러로 사용될 함수 정의 */
    // --> 클래스 안에서 정의된 함수형 이벤트 핸들러는 생성자를 통해 bind 되어야 한다.
    onMyLickClick(e) {
        e.preventDefault(); // 이벤트 전파 방지. -> 링크의 주소가 "#"일 때 스크롤 튐 방지
        let { myCount } = this.state;
        myCount++;
        this.setState({ myCount });
    }

    /** 화살표 함수로 정의된 이벤트 핸들러 */
    // --> 생성자에서의 bind 처리가 필요 없다.
    onMyLinkHover = e => {
        // e.type은 이벤트 이름에 대한 문자열.
        if (e.type === "mouseover") {
            e.target.innerHTML = "Mouse in~~!!!!";
        } else {
            e.target.innerHTML = "Click or Hover me";
        }
    };

    render() {
        let { myCount } = this.state;

        return (
            <div>
                <h2>MyEventHandler3</h2>
                <a href="#"
                    onClick={this.onMyLickClick}
                    onMouseOver={this.onMyLinkHover}
                    onMouseOut={this.onMyLinkHover}
                    onDoubleClick={e => {
                        alert('더블클릭되었습니다.');
                    }}
                    style={{display: 'block', width: 'auto'}}>
                    Click or Hover me
                </a>
                <p>{myCount}</p>
                <hr />
            </div>
        );
    }
}

export default MyEventHandler3;