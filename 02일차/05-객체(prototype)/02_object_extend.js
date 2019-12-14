/** 1) 빈 객체의 기능 확장하기 */
var obj = {};

// 빈 객체에 원하는 변수 추가하기 --> 멤버변수(=프로퍼티)
obj.name = 'Node';
obj.age = 20;

// 빈 객체에 원하는 함수 추가하기 --> 메서드
obj.say = function() {
	// 객체의 메서드 안에서 멤버변수나 메서드에 대한 접근은
	// this예약어 사용.
	console.log("이름: " + this.name);
	console.log("나이: " + this.age);
};

// 객체의 함수 호출
obj.say();

/** 2) 객체를 사용한 이후에도 기능을 확장할 수 있다. */
// getter, setter 함수 정의하기
obj.getName = function() {
	// 멤버변수에 접근시 항상 this를 통해서 접근해야 한다.
	return this.name;
};

obj.setName = function(name) {
	this.name = name;
};

// 확장된 기능 호출하기
obj.setName("노드");
console.log("이름: " + obj.getName());
obj.age = 19;
console.log("나이: " + obj.age);


