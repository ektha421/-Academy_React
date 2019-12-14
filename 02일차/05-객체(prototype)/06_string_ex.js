// 문자열에서 주어진 길이만큼 내용을 자르고 "..."을 추가
String.prototype.elipsis = function(length) {
	var value = this;	// this는 문자열 자체

	// 문자열의 길이가 length보다 크다면?
	if (value.length > length) {
		// 문자열의 0번째 위치부터 length까지 자름
		value = value.substring(0, length);
		// 잘라낸 문자열에 "..." 덧붙임.
		value += "...";
	}

	// 결과 리턴
	return value;
}

var msg = "안녕하세요. Nodejs 프로그래밍 입니다.";
console.log(msg.elipsis(20));





