/** (1) 배열의 깊은 복사 (값복사) */
// 배열의 원소끼리에 대한 대입은 값 복사로 처리된다.
var arr1 = [1,2,3];

// arr1과 같은 크기를 갖는 배열 생성
var arr2 = new Array(arr1.length);

// 한 칸씩 일일이 복사하기사 --> 깊은복사
for (var i=0; i<arr1.length; i++) {
	arr2[i] = arr1[i];
}

console.log("[before] arr1=%s", arr1);
console.log("[before] arr2=%s", arr2);

/** (2) 복사 결과 확인 */
// 원본과 사본이 독립적으로 존재하기 때문에 원본의 변경이 
// 사본에 영향을 주지 못한다.
arr1[0]+=1;
arr1[1]+=2;
arr1[2]+=3;
console.log("[after1] arr1=%s", arr1);
console.log("[after1] arr2=%s", arr2);

arr2[0]+=10;
arr2[1]+=20;
arr2[2]+=30;
console.log("[after2] arr1=%s", arr1);
console.log("[after2] arr2=%s", arr2);


