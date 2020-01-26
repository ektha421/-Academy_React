import React from 'react';

/**
 * 배열 원소값에 대한 평균을 리턴
 * @param {integer array} numbers
 * @returns {integer} 평균값
 */
const getAverage = numbers => {
    console.log('[getAverage] 평균값 계산중.. ' + new Date());
    if (numbers.length === 0) return 0;

    // 배열을 순환하면서 결과값이 누적된 계산을 수행한다.
    // const sum = numbers.reduce( (accumulator, currentValue, currentIndex ) => {
    //     console.log("누적된 값=%d, %d번째 원소=%d", accumulator, currentIndex, currentValue);
    //     return accumulator + currentValue;
    // });

    const sum = numbers.reduce( (a, b ) => a + b );
    
    return sum / numbers.length;
};

/**
 * 컴포넌트 렌더링 함수
 */
const MySimpleMemo = () => {
    // 입력값들을 저장할 배열에 대한 state정의
    const [myInputList, setMyInputList] = React.useState([]);
    // 입력 필드에 사용자가 입력한 값에 대한 state 정의
    const [myNumber, setMyNumber] = React.useState('');

    /** useMemo 사용하기 */
    // getAverage() 함수가 호출되는 시점을 myInputList 배열이 변경될 때로 한정함
    // React.useMemo( () => 호출될_함수, [함수를 호출할 시점이 되는 state값] );
    const avg = React.useMemo( () => getAverage(myInputList), [myInputList] );

    /**
     * input 필드에 사용자가 입력한 내용이 변경될 경우 호출될 이벤트 핸들러
     * @param {object} e 
     */
    // const onTextChange = (e) => {
    //     // 입력값을 myNumber라는 state값에 반영한다.
    //     setMyNumber(e.currentTarget.value);
    // };

    /**
     * useCallback() 을 사용한 이벤트 정의
     * 컴포넌트의 랜더링이 여러번 수행되더라도 최초 1회만 이벤트 함수를 생성하여
     * 메모리의 중복 사용을 방지한다.
     * 
     * 첫 번째 파라미터는 이벤트 핸들러로 사용될 콜백함수.
     * 
     * 두 번째 파라미터는 빈 배열일 경우 최초 1회만 실행되도록 설정
     */
    const onTextChange = React.useCallback( e => {
        setMyNumber(e.currentTarget.value);
    }, []);

    return (
        <div>
            <h2>MySimpleMemo</h2>

            <input value={myNumber} onChange={onTextChange} />

            <button type="button" onClick={React.useCallback(e => {
                // 상태값이 숫자 형식이 맞는 경우만 처리한다.
                if (!isNaN(myNumber)) {
                    // myInputList에 방금 입력된 값을 새로운 원소로 추가함
                    const nextList = myInputList.concat(parseInt(myNumber));
                    // 새로운 원소가 추가된 배열을 state에 반영함
                    setMyInputList(nextList);
                } else {
                    alert("숫자만 입력 가능합니다.");
                }

                // 상태값을 비움
                setMyNumber('');
            }, [myNumber, myInputList])}>등록</button>

            {/* 입력값들이 저장되어 있는 배열의 원소 수 만큼 반복하면서 렌더링 */}
            <ul>
                {myInputList.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>

            {/* 평균값 출력을 위한 함수의 리턴 결과를 출력 */}
            {/* <h3>평균값: {getAverage(myInputList)}</h3> */}
            
            {/* 평균값 출력을 위한 함수를 상태값이 변경되었을 때만 호출함 */}
            <h3>평균값: {avg}</h3>

            <hr />
        </div>
    );
};

export default MySimpleMemo;