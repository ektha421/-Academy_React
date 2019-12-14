import React from 'react';
import MyVisible from './MyVisible';

const MySimpleState2 = () => {
    // MyVisible을 화면에 표시할지 여부를 결정하기 위한 상태값 정의
    const [display, setDisplay] = React.useState(true);
    
    return (
        <div>
            <h2>MySimpleState2</h2>
            {/* 버튼 클릭 상태에 따라 MyVisible의 화면 상태 표시 여부를 변경한다. */}
            <button type="button" onClick={e => {
                setDisplay(!display);
            }}>{display ? 'Hide' : 'Show'}</button>


            {/* 상태값에 따라 MyVisible에 대한 표시(마운트), 표시안함(언마운트) 분기 */}
            {display && <MyVisible />}

            <hr />
        </div>
    );
};

export default MySimpleState2;