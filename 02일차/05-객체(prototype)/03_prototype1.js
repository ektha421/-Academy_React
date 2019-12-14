/** 1) 객체를 만들기 위한 함수 정의 */
// 함수를 new 연산자로 호출할 경우 객체를 만들기 위한 함수로 분류된다.
// 이러한 함수를 생성자(Constructor)라고 한다.
var Say = function(what) {
	console.log(">> Say 객체가 %s로 생성되었습니다.", what);
	// 이 함수는 new를 통하여 객체를 생성할 때 자동으로 호출되기 때문에,
	// 주로 멤버변수를 정의하여 값을 초기화 하기 위해서 사용한다.
	// 멤버변수를 생성하고자 하는 경우 this키워드로 변수를 생성한다.
	// 빈 값을 넣어 두고자 하는 경우 null 사용.
	this.lang = what;

	if (this.lang == "kor") {
		this.msg = "안녕하세요. 노드제이에스";
	} else {
		this.msg = "Hello Nodejs";
	}
};

/** 2) 생성자 함수 사용하기 */
// 생성자를 통해 만들어진 객체끼리는 이름은 같지만
// 내용은 다른 변수를 갖는다.
var kor = new Say("kor");
console.log(kor.msg);
var eng = new Say("eng");
console.log(eng.msg);