# Hooks

함수형 컴포넌트에서 상태값(state)를 관리하기 위한 기능으로 클래스형 컴포넌트의 LifeCycle에 대응된다.

> Ract v16.8부터 새로 추가되었음.

쉽게 말해서 아래 7가지 항목은 특정 상황에서 자동으로 호출되는 함수들을 의미함.

## useState

```js
import React, {useState} from 'react';
const[상태변수, 변수에 대한 setter함수] = useState(초기값);
```

```js
const[상태변수, 변수에 대한 setter함수] = React.useState(초기값);
```

- 가장 기본적인 Hook 함수
- 함수형 컴포넌트에서 가변적인 상태를 처리할 수 있게 한다.
- 하나의 useState 함수는 하나의 상태 값만 관리할 수 있다.
 - 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState를 여러번 사용하면 된다.
 
## useEffetct
 
useEffetct는 기본적으로 렌더링 직후마다 실행되며, 두번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건ㅇ 달라진다.
 
> 클래스형 컴포넌트의 **componentDidMount**와 **componentDidUpdate**를 함친 상태
 
### 렌더링 될 때마다 실행되는 함수 정의

최초 등장하거나 state값이 변경될 때 모두 실행된다.
 
```js
useEffect(() => {
    ...처리할 코드 ...
```

### 업데이트시에는 생략되는 함수 정의
컴포넌트가 마운트될 때 최초 1회만 실행된다. (state값이 변경될 때는 실행되지 않는다.)
```js
useEffect(() => {
    ...처리할 코드...
},[]);
```

### 특정 state값이 변경될 때만 호출되도록 설정하기

```js
useEffect(() => {
    ...처리할 코드...
}, [state값이름]);
```

### 컴포넌트가 언마운트(화면에서 사라짐) 될 때만 실행되도록 설정하기

클로저(리턴되는 함수)를 명시한다.

```js
useEffect(() => {
    return function(){
     ...처리할 코드...
    };
},[state값이름]);
```

<!-- npm start or yarn start
     - 개발용 실행모드

     npm run build
     - 배포를 위한 패키징
     - 명령 수행 후 build라는 폴더가 생성되고 이 폴더의 항목들을 웹 서버에 업로드 하여 실행가능
     - 빌트 결과물을 확인하기 위해서는 build 폴더 안에 live-server 구동으로 확인가능

    // IE11 브라우저 지원 기능 추가
    // >> npm install --save react-app-polyfill
    import 'react-app-polyfill/ie9;
    import 'react-app-polyfill/stable;
-->
 
