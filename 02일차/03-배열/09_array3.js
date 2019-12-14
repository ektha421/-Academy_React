// slice메서드는 배열의 일부뿐만 아니라 전체를 깊게 복사하기도 한다.
var arr1 = [1,2,3];
var arr2 = arr1.slice();

console.log("[before] arr1=%s", arr1);
console.log("[before] arr2=%s", arr2);

// 원본과 사본이 독립적으로 존재한다.
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

