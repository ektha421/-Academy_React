function hello(msg) {
    console.log("--- start ---");
    // Javascript에서 콜백함수를 받는 내장 함수.
    // --> 지정된 시간만큼 대기후 콜백함수를 호출한다.
    setTimeout(function() {
		console.log(msg);
	}, 1000);
    console.log("--- done ---");
}

hello("Hello callback");

console.log("----- 프로그램을 종료합니다 ------");



