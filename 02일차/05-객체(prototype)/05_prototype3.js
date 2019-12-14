/** 1) 사용자의 특성(변수)와 동작(함수)를 정의하기 위한 생성자 */
var User = function() {
    console.log("User 클래스의 객체가 생성됨");
    /** 멤버변수의 정의 */
    // --> 함수 안에서 this를 사용하여 생성함
    this.name = null;
    this.age = null;
};

/** 2) 메서드의 추가 */
// 정보확인
User.prototype.view = function() {
    console.log(">> 이름: %s, 나이: %d", this.name, this.age);
};

// 가입
User.prototype.join = function(name, age) {
    this.name = name;
    this.age = age;
    console.log("가입되었습니다.");
    // 같은 객체내의 다른 메서드에 접근할 경우 "this.함수명()"
    this.view();
};

// 정보수정
User.prototype.edit = function(name, age) {
    this.name = name;
    this.age = age;
    console.log("회원정보가 수정되었습니다.");
    this.view();
};

// 탈퇴
User.prototype.out = function() {
    this.name = null;
    this.age = null;
    console.log("탈퇴되었습니다.");
    this.view();
};

/** 3) User 클래스를 통한 객체 생성 */
var user1 = new User();
user1.join("학생1", 20);
user1.edit("학생1(수정)", 21);
user1.out();

console.log(); // 빈 줄 삽입

var user2 = new User();
user2.join("학생2", 23);
user2.edit("학생2(수정)", 24);
user2.out();
