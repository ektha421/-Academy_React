import React from 'react';

/**
 * 함수 형태의 컴포넌트에서 이벤트 핸들러를 익명 함수 형태로 정의하기(가장 일반적인 방법)
 * + onChange 이벤트 처리 
 */
const MyEventHandler2 = () => {
    const [myMessage, setMyMessage] = React.useState('');

    return (
        <div>
            <h2>MyEventHandler2</h2>
            <p>입력 내용이 출력됩니다.</p>
            <input
                type='text'
                id='my_input'
                placeholder='input any message'
                onChange={e => {
                    console.log(e);
                    setMyMessage(e.target.value);
                }}
                onKeyPress={e => {
                    // 한글에서 반응 안함
                    console.log("key press >> " + e.target.value);
                }}
                onKeyDown={e => {
                    // 영문에서 입력값 취득 안됨
                    console.log("key down >> " + e.target.value);
                }}
                onKeyUp={e => {
                    // 안전함.
                    console.log("key up >> " + e.target.value);
                }}
            />
            <button type='button' onClick={e => {
                console.clear();
                setMyMessage('');
                document.getElementById("my_input").value = "";
            }}>Clear</button>
            <p>{myMessage}</p>
            <hr />
        </div>
    );
};

export default MyEventHandler2;
