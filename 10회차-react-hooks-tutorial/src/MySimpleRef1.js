import React from 'react';

const MySimpleRef1 = () => {
    const myInputRef = React.useRef(null);

    return (
        <div>
            <h2>MySimpleRef</h2>

            <input type="text" ref={myInputRef} />

            <button onClick={e => {
                console.log(myInputRef);
                alert(myInputRef.current.value);
                myInputRef.current.value = "";
            }}>클릭</button>
            <hr />
        </div>
    );
};

export default MySimpleRef1;