var numbers = [1,2,3,4,5];

// map()함수의 리턴값은 원본에 대한 수정결과
const processed = numbers.map((item, index, origin) => {
    // numbers 배열의 원소 수 만큼 반복 실행된다.
    console.log("----------------------");
    console.log('현재 처리중인 원소값: %s', item);
    console.log('현재 처리중인 항목의 인덱스: %d', index);
    console.log(origin);

    // 전달받은 원소를 변경하여 리턴하면
    // 해당 위치의 원본이 수정된다.
    return "<div>" + item + "</div>";
});

console.log("---------------");
console.log(processed);