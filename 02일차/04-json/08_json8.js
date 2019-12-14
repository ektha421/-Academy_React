/** 빈 JSON의 확장 */
var myjson = {};	// 비어 있는 JSON
console.log(myjson);

// 존재하지 않는 key를 사용하여 대입하면 그 순간 생성된다.
// --> 확장
myjson.name = "자바스크립트";
myjson.age = 20;
console.log(myjson);


