// Object간의 대입은 복사가 아닌 참조가 발생한다.
var json1 = {a: 100, b: 200};
var json2 = json1;
console.log("[before] json1={a:%d, b:%d}", json1.a, json1.b);
console.log("[before] json2={a:%d, b:%d}", json2.a, json2.b);

// 원본을 변경하면, 원본을 참조하는 사본도 함께 변경된다.
json1.a+=100;
json1.b+=200;
console.log("[after1] json1={a:%d, b:%d}", json1.a, json1.b);
console.log("[after1] json2={a:%d, b:%d}", json2.a, json2.b);

// 사본을 변경할 경우도 원본이 함께 변경된다.
json2.a-=50;
json2.b-=100;
console.log("[after2] json1={a:%d, b:%d}", json1.a, json1.b);
console.log("[after2] json2={a:%d, b:%d}", json2.a, json2.b);


