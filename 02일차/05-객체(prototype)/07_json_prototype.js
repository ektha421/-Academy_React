/** 1) 생성자 정의  */
var Member = function(name, age) {
	console.log("---- Member의 객체가 생성되었습니다. ----");
	this.name = name;
	this.age = age;
};

/** 2) 클래스 내의 메서드를 JSON형식으로 일괄 정의 */
// --> prototype 속성에 대한 값들을 JSON 형식으로 구조화 
// --> JSON 방식의 확장은 최초 클래스 정의시만 가능.
//     이미 객체가 생성된 클래스는 JSON방식으로 확장되지 않는다.
//     (앞 예제처럼 생성자.prototype.함수명 형식으로 개별적인 함수의 대입은 가능함.)
Member.prototype = {
	// 메서드 영역
	setName: function(name) {
		this.name = name;
	},
	setAge: function(age) {
		this.age = age
	},
	say: function() {
		console.log("이름: " + this.name);
		console.log("나이: " + this.age);
	}
};

/** 3) 객체 활용 */
// prototype 객체 만들기
var obj = new Member('헬로노드', 19);
// 객체의 함수 호출
obj.say();
// 학생정보 변경 후 출력
obj.setName('노드학생');
obj.setAge(20);
obj.say();









