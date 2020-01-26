# Restful 개요

## 데이터베이스 (자료저장소)

	INSERT        입력  CREATE ==>   POST
	SELECT        조회   READ ===>  GET
	UPDATE       수정   UPDATE ==>  PUT
	DELETE        삭제   DELETE ===>  DELETE

## API 명세
- 목록조회[GET]   : http://itpaper.co.kr/demo/ajax/api/dept_list.php?keyword=검색어
- 상세조회[GET]   : http://itpaper.co.kr/demo/ajax/api/dept_view.php?deptno=학과번호
- 학과추가[POST] : http://itpaper.co.kr/demo/ajax/api/dept_write.php
	* dname: 학과이름(필수)
	* loc : 학과위치(미필수)
- 학과수정[PUT]  : http://itpaper.co.kr/demo/ajax/api/dept_edit.php
	* deptno: 학과번호(필수)
	* dname: 학과이름(필수)
	* loc : 학과위치(미필수)
- 학과[DELETE]  : http://itpaper.co.kr/demo/ajax/api/dept_delete.php
	* deptno: 학과번호(필수)

## Ajax 연동시 제약사항

브라우저에 보여지는 도메인과 접속 대상(API 서버)의 도메인이 다르면 연동 X

단, API서버에서 이를 허용하는 코드를 추가하면 연동 가능.

## Ajax 구현시 필수사항

반드시 웹 페이지를 웹 서버 기반으로 실행해야 함.


## jQuery Ajax 함수 원형

```js
			$.ajax( {
				/** ajax 기본 옵션 */
				cache: false,	// 캐쉬 사용 금지 처리
				url: 'APIURL',  // 읽어들일 파일의 경로
				method: 'get',	// 통신방법 (get(기본값), post, put, delete)
				data: {},		// 접속대상에게 전달할 파라미터
				dataType: 'json',	// 읽어올 내용 형식 (html,xml,json)
				timeout: 30000,		// 타임아웃 (30초)

				// 통신 시작전 실행할 기능 (ex: 로딩바 표시)
				beforeSend: function() {
					// 현재 통신중인 대상 페이지를 로그로 출력함
					console.log(">> Ajax 통신 시작 >> " + this.url);
				},
				// 통신 성공시 호출될 함수 (파라미터는 읽어온 내용)
				success: function(req) {
					console.log(">> 성공!!!! >> " + req);
					// 준비된 요소에게 읽어온 내용을 출력한다.
					$("#result").append(req);
				},
				// 통신 실패시 호출될 함수 (파라미터는 에러내용)
				error: function(error) {
					// 404 -> Page Not Found
					// 50x -> Server Error(웹 프로그램 에러)
					// 200, 0 -> 내용의 형식 에러(JSON,XML)
					console.log(">> 에러!!!! >> " + error.status);
				},
				// 성공,실패에 상관 없이 맨 마지막에 무조건 호출됨 ex) 로딩바 닫기
				complete: function() {
					console.log(">> Ajax 통신 종료!!!!");
				}
			} );
```


## $.ajaxSetup 적용 후

```js
			$.ajax( {
				url: 'APIURL',
				method: 'get',
				data: {},
				success: function(req) {
					console.log(">> 성공!!!! >> " + req);
					$("#result").append(req);
				}
			} );
```

## jQuery에서 제공하는 전송방식에 따른 축약형 함수

```js
			$.get(URL, {변수들}, function(req) {
				// success
			});

			$.post(URL, {변수들}, function(req) {
				// success
			});
			
			$.put(URL, {변수들}, function(req) {
				// success
			});

			$.delete(URL, {변수들}, function(req) {
				// success
			});
```