import React from 'react';

// 1교시 -----------------------------------
import MyEventHandler1 from './MyEventHandler1'; // 함수형 컴포넌트
import MyEventHandler2 from './MyEventHandler2'; // 함수형 컴포넌트

// 2교시 -----------------------------------
import MyEventHandler3 from './MyEventHandler3'; // 클래스형 컴포넌트

// 3교시 -----------------------------------
import MyEventHandler4 from './MyEventHandler4'; // 클래스형 컴포넌트

const App = () => {
    return (
        <div>
            <h1>React Event Handler Tutorial</h1>
            {/* 1교시 */}
            <MyEventHandler1 />
            <MyEventHandler2 />
            {/* 2교시 */}
            <MyEventHandler3 />
            {/* 3교시 */}
            <MyEventHandler4 />
        </div>
    );
};

export default App;
