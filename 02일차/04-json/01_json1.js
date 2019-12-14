/** JSON 정의 --> 변수들의 그룹 = 객체(Object) */
var student = {
	// key: value, key: value ... 의 형식으로 나열
	studno: 10101,
	grade: 1,
	name: "학생1",
	phoneno: "010-1231-2342"
};

// 객체이름.key 형식으로 접근 가능
console.log("학번: %d", student.studno);
console.log("학년: %d", student.grade);
console.log("이름: %s", student.name);
console.log("연락처: %s", student.phoneno);

// 이름표를 갖는 배열처럼 접근도 가능.
console.log("학번: %d", student['studno']);
console.log("학년: %d", student['grade']);
console.log("이름: %s", student['name']);
console.log("연락처: %s", student['phoneno']);


