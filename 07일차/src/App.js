import React from 'react';

// 1교시 ------------------------------------------
import MyArrayComponent1 from './MyArrayComponent1';
import MyArrayComponentClass1 from './MyArrayComponentClass1';
import MyArrayComponent2 from './MyArrayComponent2';
import MyArrayComponentClass2 from './MyArrayComponentClass2';
import MyArrayComponent3 from './MyArrayComponent3';
import MyArrayComponentClass3 from './MyArrayComponentClass3';
// 2교시 ------------------------------------------
import MyJsonArrayComponent from './MyJsonArrayComponent';
import MyJsonArrayComponentClass from './MyJsonArrayComponentClass';
// 3교시 ------------------------------------------
import MyContacts from './MyContacts';
import MyContactsClass from './MyContactsClass';

const App = () => {
    return (
        <div>
            <h1>React Collection Tutorial</h1>
            {/* 1교시 */}
            <MyArrayComponent1 />
            <MyArrayComponentClass1 />
            <MyArrayComponent2 />
            <MyArrayComponentClass2 />
            <MyArrayComponent3 />
            <MyArrayComponentClass3 />
            {/* 2교시 */}
            <MyJsonArrayComponent />
            <MyJsonArrayComponentClass />
            {/* 3교시 */}
            <MyContacts />
            <MyContactsClass />
        </div>
    );
};

export default App;
