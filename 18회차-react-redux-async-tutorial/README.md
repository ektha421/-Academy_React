# 리덕스를 기반으로 하여 비동기 처리 미들웨어 만들기

## 프로젝트 생성하기
```shell
yarn create react-app react-redux-async-tutorial
```

## 필요한 패키지 설치하기

### Route 관련
```shell
yarn add react-router-dom
```

### CSS 처리 관련
```shell
yarn add styled-components
```

### 리덕스 관련
```shell
yarn add redux
yarn add react-redux
yarn add redux-actions
yarn add redux-logger
yarn add redux-devtools-extension
yarn add redux-thunk
```

### Ajax 관련
```shell
yarn add axios
```

------------------------------------

## 프로젝트 실행

```shell
yarn start
```

------------------------------------

## 프로젝트 초기화

### 불필요한 파일 삭제

1. `/src` 폴더 안에서 App.css, index.css, logo.svg 삭제
1. index.js 파일에서 삭제한 파일 관련 구문 삭제

### App.js 파일 리셋

모든 내용을 삭제하고 rsc 명령으로 초기화

```js
import React from 'react';

const App = () => {
    return (
        <div>
            <h1>Hello React</h1>
            <hr />
        </div>
    );
};

export default App;
```

### Route 적용

#### index.js

아래의 참조 구문 추가

```js
/** Route 관련 참조 */
import { BrowserRouter } from 'react-router-dom';
```

렌더링 처리를 아래와 같이 수정

```js
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
```


### Redux 스토어 만들기

#### /src/modules/index.js

```js
import { combineReducers } from 'redux';

export default combineReducers({
    // 앞으로 추가될 모듈들이 이 위치에서 리덕스에 추가된다.    
});
```

#### /src/index.js

모듈 참조

```js
/** 리덕스를 위한 참조 추가 */
// 리덕스에서 스토어 생성 함수와 미들웨어 처리 함수 가져오기
import { createStore, applyMiddleware } from 'redux';

// 전체 App을 리덕스에 구독시키기 위해 위해 Provder라는 객체를 가져온다.
import { Provider } from 'react-redux';

// 크롬 개발자 도구에 설치된 확장도구와 연동하기 위한 함수
import { composeWithDevTools } from 'redux-devtools-extension';

/** 미들웨어를 위한 참조 추가 */
// 미들웨어 불러오기
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

// modules폴더(직접 생성해야 함)에 정의된 모든 action과 action 생성 함수 및 초기 상태값들을 묶음으로 가져온다.
import rootReducer from './modules';
```

리덕스 스토어 생성

```js
/** 리덕스 스토어 생성 */
// 로그를 생성하는 미들웨어 객체 만들기 --> 다른 미들웨어들보다 우선적으로 적용하는 것이 좋다.
const logger = createLogger();

// --> 미들웨어와 크롬 개발자 도구 연동을 적용한 스토어 생성 (개발용 코드, 완성 후 기본코드로 전환 필요)
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk)));
```

렌더링 처리를 `<Provider store={store}>` 태그로 감싼다.

```js
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
```



## 코드 백업

여기까지 작업 후

`node_modules` 폴더를 제외한 나머지 항목들을 압축하여 보관.

신규 작업시 적절한 위치에서 압축을 해제하고 다음의 명령어를 실행하여 작업 개시 가능

```
yarn install    # 필요한 패키지 일괄 설치
yarn upgrade    # 버전업이 필요한 패키지들 업그래이드
yarn start      # 가동하기
```