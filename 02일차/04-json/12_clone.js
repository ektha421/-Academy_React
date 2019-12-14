/** (1) 객체의 깊은 복사를 수행하기 위해서 정의한 함수 */
function clone(obj) {
	// 참조복사가 발생하지 않는 요소라면 수행할 필요가 없으므로,
	// 원본을 그대로 리턴
    if (obj == undefined || obj == null || typeof obj != "object") {
    	return obj;
    }

    // 객체의 생성자를 통해서 동일한 틀의 빈 객체를 생성
    var copy = obj.constructor();

    // 원본의 모든 키에 대한 반복 처리
    for (var attr in obj) {
    	// 복사본에 원본과 같은 키를 생성하면서 값 복사 처리
        copy[attr] = obj[attr];
    }
    return copy;
}

/** (2) 깊은 복사 함수의 결과 확인 */
var json1 = {a: 100, b: 200};
var json2 = clone(json1);
console.log("[before] json1={a:%d, b:%d}", json1.a, json1.b);
console.log("[before] json2={a:%d, b:%d}", json2.a, json2.b);

json1.a+=100;
json1.b+=200;
console.log("[after1] json1={a:%d, b:%d}", json1.a, json1.b);
console.log("[after1] json2={a:%d, b:%d}", json2.a, json2.b);

json2.a-=50;
json2.b-=100;
console.log("[after2] json1={a:%d, b:%d}", json1.a, json1.b);
console.log("[after2] json2={a:%d, b:%d}", json2.a, json2.b);



