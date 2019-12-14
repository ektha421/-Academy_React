var myjson = {
	name: "자바스크립트",
	age: 20
};

// 정의되지 않은 값에 접근하였으므로 undefiend
console.log(myjson.msg);

// 정의되지 않은 값이지만 확장의 개념이 적용된다.
myjson.msg = "HelloWorld";
console.log(myjson.msg);

// 변수명에 오타나는 경우 JSON이 확장되기 때문에,
// 에러가 발생하지 않는다. --> 오작동
myjson.aga = 21;
console.log(myjson);


