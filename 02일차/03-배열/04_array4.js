var list = ['item1', 'item2', 'item3'];	// 배열생성
console.log(list);

list.push('item4');			// 배열의 끝에 요소 추가
console.log(list);

var last = list.pop();		// 마지막 요소를 리턴후 삭제
console.log("last: " + last);
console.log(list);

list.unshift('item0');		// 배열의 앞에 요소 추가
console.log(list);

var first = list.shift();	// 첫번째 요소 리턴후 삭제
console.log("first: " + first);
console.log(list);

delete list[1];				// 중간부분 요소 삭제하기
console.log(list);			// 삭제된 위치의 인덱스는 남아있다.
console.log(list[1]);		// 삭제된 위치는 undefined


