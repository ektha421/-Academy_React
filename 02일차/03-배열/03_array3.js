// 배열 데이터의 생성
var list = ['item1', 'item2', 'item3'];

// 반복문을 통한 동기식 스캔
for (var i=0; i<list.length; i++) {
	console.log("%d번째 요소 >> %s", i, list[i]);
}

console.log("-----------------");

// forEach 함수의 콜백함수를 통한 비동기식 스캔
list.forEach(function(item, index) {
	console.log("%d번째 요소 >> %s", index, item);
});



