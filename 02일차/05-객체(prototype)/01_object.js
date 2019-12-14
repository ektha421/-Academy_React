/** 1) 객체 정의하기 */
var obj = {				// <-- JSON 형식의 객체 
	name: 'Node',		// <-- 객체에 포함된 변수(=멤버변수,프로퍼티)
	age : 20,
	say : function() {	// <-- 객체에 포함된 함수(=메서드)
		// 메서드 안에서 프로퍼티에 접근할 경우 this예약어 사용.
		console.log("이름: " + this.name);
		console.log("나이: " + this.age);
	},
	// 메서드를 통한 프로퍼티의 간접 접근(값 리턴하기)
	getName: function() {
		return this.name;
	},
	// 메서드를 통한 프로퍼티의 간접 접근(값 저장하기)
	setName: function(name) {
		this.name = name;
	}
};

/** 2) 객체 활용하기 */
// 객체를 통한 메서드 호출
obj.say();
obj.setName("노드");
console.log("이름: " + obj.getName());

// 객체를 통한 프로퍼티 접근
obj.age = 19;
console.log("나이: " + obj.age);
