import React, { Component } from 'react';

/** state 코드 축약 */
class MyState2 extends Component {
    /** state값 정의 -> 생성자 없이 사용하고자 하는 변수들을 JSON 형식으로 정의 */
    state = {
        'my_number': 0,
        'my_time': new Date().toString()
    };

    /** 화면 출력 함수 */
    render() {
        // 비구조 문법으로 상태값들 추출
        // -> const는 상수를 정의하는 키워드 이므로 const로 정의할 경우 변수를 변경하지 못하게 된다.
        let {my_number, my_time} = this.state;

        return (
            <div>
                <h3>MyState2</h3>
                <p>{my_number}회 눌러짐 : <i><small>{my_time}</small></i></p>
                {/* onClick 이벤트 정의 - 콜백함수 전달해야 함 */}
                <button onClick={() => {
                    // 준비한 state값에 대한 변경 처리
                    my_number++;
                    my_time = new Date().toString();
                    
                    // "{}"만 사용하여 추출한 값들을 묶어서 전달
                    // 두 번째 파라미터를 통해 화면에 대한 반영이 완료 된 직후 수행할 동작을 콜백으로 전달할 수 있다.
                    this.setState({my_number, my_time}, () => {
                         console.log("상태가 %d회 변경되었습니다.", my_number)
                    });
                }}>
                    +1
                </button>
            </div>
        );
    }
}

export default MyState2;
