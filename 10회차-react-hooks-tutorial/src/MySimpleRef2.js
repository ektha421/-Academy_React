import React from 'react';

const MySimpleRef2 = () => {
    const myName = React.useRef("리액트");

    const setMyName = (value) => {
        myName.current = value;
    };

    const getMyName = () => myName.current;

    console.log("[MySimpleRef2] %s", getMyName());
    setMyName("자바스크립트");
    console.log("[MySimpleRef2] %s", getMyName());

    return (
        <div>
            <h2>MySimpleRef2</h2>
            <p>{getMyName()}</p>
        </div>
    );
};

export default MySimpleRef2;