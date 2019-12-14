// 일반적인 변수의 복사.
var a = 100;
var b = a;
console.log("[before] a=%d, b=%d", a, b);

// 변수끼리의 대입은 서로 복사하여 독립적인 값이 되기 때문에
// 원본을 변경하더라도 복사본에 영향을 주지 않는다.
a+=100;
console.log("[after1] a=%d, b=%d", a, b);

// 복사본을 변경하더라도 마찬가지
b-=50;
console.log("[after2] a=%d, b=%d", a, b);


