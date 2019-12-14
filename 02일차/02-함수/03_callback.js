/** (1) 예제를 위한 함수 정의하기 */
// 콜백함수를 요구하는 add함수 정의
function add(a, b, callback) {
	var result = a + b;
	// 주로 콜백함수는 결과 데이터를 다른 함수를 통해서
	// 받고자 하는 경우 사용한다.
	callback(result);
}

function my_callback(z) {
	console.log("콜백함수 실행됨");
	console.log("더하기(20,30)의 결과 >> " + z);
}

/** (2) 정의한 함수 호출 */
// 일반변수와 또 다른 함수를 파라미터로 전달하기
var num1 = 20;
var num2 = 30;
add(num1, num2, my_callback);

// 일반적인 콜백 사용 문법
add(100, 200, function(result) {
	console.log("200 + 100의 결과는 %d 입니다.", result);
});




