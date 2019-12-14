/** (1) 배열의 얕은 복사 (참조복사) */
// 배열끼리의 대입은 복사가 아닌 참조가 발생한다.
var arr1 = [1,2,3];
var arr2 = arr1;
console.log("[before] arr1=%s", arr1);
console.log("[before] arr2=%s", arr2);

/** (2) 복사 결과 확인하기 */
// 원본을 변경하면, 원본을 참조하는 사본도 함께 변경된다.
arr1[0]+=1;
arr1[1]+=2;
arr1[2]+=3;
console.log("[after1] arr1=%s", arr1);
console.log("[after1] arr2=%s", arr2);

// 사본을 변경할 경우도 원본이 함께 변경된다.
arr2[0]+=10;
arr2[1]+=20;
arr2[2]+=30;
console.log("[after2] arr1=%s", arr1);
console.log("[after2] arr2=%s", arr2);


