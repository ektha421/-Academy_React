import React from 'react';

const getAverage = numbers => {
    console.log('[getAverage] 평균값 계산중.. ' + new Date());
    if (numbers.length === 0) return 0;
    
    let sum = 0;

    numbers.forEach((value, index) => {
        sum += value;
    });

    return sum / numbers.length;
};

const MySimpleReduce = () => {
    const [list, setList] = React.useState([]);
    const [number, setNumber] = React.useState('');

    const onChange = e => {
        if (!isNaN(e.target.value)) {
            setNumber(e.target.value);
        }
    };

    const onInsert = (e) => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };

    return (
        <div>
            <h2>MySimpleReduce</h2>
            <input value={number} onChange={onChange} />
            <button type="button" onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {getAverage(list)}
            </div>
        </div>
    );
};

export default MySimpleReduce;
