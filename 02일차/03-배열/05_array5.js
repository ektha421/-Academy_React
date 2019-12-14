// 배열 데이터의 생성
var list = ['item1', 'item2', 'item3'];

// 1번째 위치부터 2개 삭제
list.splice(1,2);
console.log(list);

// 0번째 위치부터 0개를 삭제하고, 0번째 위치부터 3개의 항목을 추가
list.splice(0, 0, 'new1', 'new2', 'new3');
console.log(list);

// 3번째 위치부터 1개를 삭제하고, 3번째 위치부터 2개의 항목을 추가
list.splice(3, 1, 'new4', 'new5');
console.log(list);

// 1번째 위치부터 3번째 위치 전까지 복사하여 새로운 배열 생성
var copy = list.slice(1, 3);
console.log(copy);
// 원본은 변화 없음
console.log(list);


