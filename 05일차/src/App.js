// Component 클래스 참조.
import React, { Component } from 'react';

// 2교시 -----------------------------------
import MyComponent1 from './MyComponent1';
import MyComponent2 from './MyComponent2';
import MyComponentProps1 from './MyComponentProps1';
import MyComponentProps2 from './MyComponentProps2';

// 3교시 -----------------------------------
import MyDefaultProps1 from './MyDefaultProps1';
import MyDefaultProps2 from './MyDefaultProps2';
import MyChildren1 from './MyChildren1';
import MyChildren2 from './MyChildren2';
import MyUnstructed1 from './MyUnstructed1';
import MyUnstructed2 from './MyUnstructed2';

// 새로운 1교시 -----------------------------------
import MyProTypes1 from './MyProTypes1';
import MyProTypes2 from './MyProTypes2';
// 새로운 2교시 -----------------------------------
import MyState1 from './MyState1';
import MyState2 from './MyState2';
// 새로운 3교시 -----------------------------------
import MyState3 from './MyState3';
import MyState4 from './MyState4';
import MyState5 from './MyState5';

// Component클래스를 상속받는 App 클래스 정의
class App extends Component {
    // 컴포넌트로 사용되는 클래스는 반드시 `render()`함수를 정의해야 함.
    // --> JSX 반환용.
    render() {
        const message = 'Hello Component';
        return (
            <div>
                <h1>{message}</h1>

                {/* 2교시 */}
                <h2>컴포넌트 파악하기</h2>
                <MyComponent1 />
                <MyComponent2 />
                <hr />

                <h2>컴포넌트 속성 사용하기</h2>
                <MyComponentProps1 name='민호' age='19' />
                <MyComponentProps2 name='수영' age='21' />
                <hr />

                {/* 3교시 */}
                <h2>컴포넌트 속성의 기본값</h2>
                <MyDefaultProps1 />
                <MyDefaultProps2 />
                <hr />

                <h2>컴포넌트 children 사용하기</h2>
                <MyChildren1 width='200' height='30'></MyChildren1>
                <MyChildren2 width='300' height='50'>
                    Hello React
                </MyChildren2>
                <hr />

                <h2>비구조 문법</h2>
                <MyUnstructed1 color='#f0f'>오늘은</MyUnstructed1>
                <MyUnstructed2 color='#f60'>여기까지</MyUnstructed2>
                <hr />

                {/* 새로운 1교시 */}
                <h2>타입검사, 필수값 지정</h2>
                <MyProTypes1 name='영민'>헬로월드</MyProTypes1>
                {/* 문자열 타입에 숫자값 전달하기. - 개발자도구를 통해 경고 메시지 확인 가능함. */}
                <MyProTypes2 name={123}>Hello World</MyProTypes2>
                <hr />

                {/* 새로운 2,3교시 */}
                <h2>state</h2>
                <MyState1 />
                <MyState2 />
                <MyState3 />
                <MyState4 />
                <MyState5 />
                <hr />
            </div>
        );
    }
}

export default App;
