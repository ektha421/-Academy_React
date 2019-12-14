// 배열 데이터의 생성
var list1 = ['item1', 'item2', 'item3'];
console.log(list1);

// 아래 방법도 가능함.
var list2 = new Array('item1', 'item2', 'item3');
console.log(list2);

// 하지만 다음과 같은 방법은 결과가 다름
var list3 = [30];
console.log(list3);

// 첫 번째 파라미터가 정수인 경우 배열의 크기를 의미 이후 파라미터들은 무시됨
// --> 저장공간이 30칸짜리인 빈 배열이 생성됨
var list4 = new Array(30);
console.log(list4);

// --> 각 칸에는 값이 지정되지 않았으므로 출력해보면 undefined임.
console.log(list4[0]);

