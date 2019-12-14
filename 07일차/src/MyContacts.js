import React, { useState } from 'react';

const MyContacts = props => {
    const data = [
        { name: '철수', phone: '010-1234-0001' },
        { name: '희영', phone: '010-1234-0002' }
    ];

    const [contactData, setContactData] = useState(data);
    const [count, setCount] = useState(2);

    const onPushButtonClick = () => {
        const nextValue = count + 1;

        contactData.push({
            name: 'hello' + nextValue,
            phone: '010-1234-999' + nextValue
        });

        setContactData(contactData);
        setCount(nextValue);
    };

    return (
        <div>
            <h1>MyContacts</h1>
            <ul>
                {contactData.map((item, index) => {
                    return (
                        <li key={index}>
                            <strong>{item.name}: </strong>
                            <small
                                style={{
                                    color: '#999',
                                    fontSize: '0.8em',
                                    marginRight: '10px'
                                }}>
                                {item.phone}
                            </small>
                        </li>
                    );
                })}
            </ul>
            <button type='button' onClick={onPushButtonClick}>Add Item</button>
            <hr />
        </div>
    );
};

export default MyContacts;
