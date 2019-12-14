// 배열 데이터의 생성
var list = ['item1', 'item2', 'item3'];
console.log(list);

// 존재하지 않는 인덱스를 명시할 경우 배열의 크기가 확장됨.
list[3] = 'item4';
// 중간 인덱스를 건너뛸 경우, 해당 위치는 undefined로 정의됨.
list[5] = 'item5';

// 배열의 길이 --> 마지막 index+1
console.log("배열 요소의 수: %d", list.length);
// 값이 부여되지 않은 곳은 undefined
console.log("list[4]: " + list[4]);





