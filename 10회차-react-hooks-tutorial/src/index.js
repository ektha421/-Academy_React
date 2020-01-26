/*
 * npm start 혹은 yarn start
 *  - 개발용 실행 모드 (MS브라우저 지원 안함.)
 * 
 * npm run build
 *  - 배포를 위한 패키징 (Edge는 지원함.)
 *  - 명령 수행 후 build라는 폴더가 생성되고 이 폴더의 항목들을 웹 서버에 업로드 하여 실행 가능
 *  - 빌드 결과물을 확인하기 위해서는 build 폴더 안에 live-server 구동으로 확인 가능
 */

// IE11 브라우저 지원 기능 추가
// >> npm install --save react-app-polyfill
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
