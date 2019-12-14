/** 웹 팩을 통해 번들링(통합) 될 파일들 선언 */

// 번들링 시에는 웹 팩에 포함되어 있는 바벨이라는 도구를 통해
// ES6 문법이 ES5 문법으로 변환된다.(하위 브라우저 호환을 위함)

// node_modules 폴더에 다운로드 된 리액트를 불러와서 실행할 수 있게 한다.
import React from 'react';
// 사용하고자 하는 이미지 파일 불러오기
import logo from './logo.svg';
// 사용하고자 하는 스타일시트 가져오기
import './App.css';

/** App이라는 이름의 함수형 컴포넌트 정의 */
// 프로젝트에서 컴포넌트를 렌더링하면 함수에서 반환하고 있는 내용이 브라우저에 나타난다.
function App() {
  // 반환되는 HTML 코드는 JSX 문법을 사용한다.
  // JSX --> XML과 비슷한 React 전용 Javascript 확장 문법.
  // react 프로젝트가 번들링 되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환된다.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          안녕하세요. 반갑습니다. 리액트 입니다.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;