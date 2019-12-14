/** 1) 객체를 만들기 위한 함수 정의 --> 앞 예제와 동일 */
var Say = function(what) {
	console.log(">> Say 객체가 %s로 생성되었습니다.", what);
	this.lang = what;
	if (this.lang == "kor") {
		this.msg = "안녕하세요. 노드제이에스";
	} else {
		this.msg = "Hello Nodejs";
	}
};

/** 2) 생성자 함수에 메서드 추가하기 */
// JS의 모든 Object는 prototype이라는 속성을 갖는다.
// 이 속성을 활용하면 Object의 하위에 다른 변수나 함수를
// 추가할 수 있다. --> 객체의 확장개념.
Say.prototype.hello = function() {
	// 메서드에서 생성자에 의해 추가된 멤버변수에 접근할 경우
	// this 키워드를 사용한다.
	console.log(this.msg);
}

/** 3) 객체를 통한 메서드 호출하기 */
// 두 객체는 같은 이름의 함수를 갖지만, 
// 객체가 내장하고 있는 멤버변수의 값에 따라서 다른 결과를
// 보여준다.
var kor = new Say("kor");
kor.hello();
var eng = new Say("eng");
eng.hello();



