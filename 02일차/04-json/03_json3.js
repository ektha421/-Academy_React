/** 단일 형태의 JSON */
var centerPoint = {
	x: 5,					// x좌표
	y: 10					// y좌표
};

/** 다른 JSON을 포함하는 JSON */
var circle = {
	center: centerPoint,  	// 중심의 좌표
	radius: 5.10            // 반지름
};

console.log("원의 중점: (%d, %d)", circle.center.x, circle.center.y);
console.log("원의 반지름: %d", circle.radius);


