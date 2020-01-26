import React from 'react';

const MySimpleState1 = () => {
    const [myName, setMyName] = React.useState('');
    const [myPoint, setMyPoint] = React.useState(50);

    return (
        <div>
            <h2>MySimpleState1</h2>

            <div>
                <label htmlFor="myNameInput">이름: </label>
                <input id="myNameInput" type="text" value={myName} step="1" onChange={e => {
                    setMyName(e.currentTarget.value);
                }}/>
            </div>
            
            <div>
                <label htmlFor="myPointInput">점수: </label>
                <input id="myPointInput" type="range" min="0" max="100" value={myPoint} step="1" onChange={e => {
                    setMyPoint(e.currentTarget.value);
                }}/>
            </div>

            <h3>{myName}님의 점수는 {myPoint}점 입니다.</h3>

            <hr />
        </div>
    );
};

export default MySimpleState1;