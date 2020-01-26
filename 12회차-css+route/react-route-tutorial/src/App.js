import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Department1 from './pages/Department1.js';

// SPA 기반에서는 <a> 태그 대신 react-router-dom의 기본 컴포넌트인 <Link>를 사용해야 한다.
// <a>를 사용하는 경우 실제 페이지 리프레시가 발생하게 되고,
// <Link>를 사용하는 경우 Route 기능을 통해 SPA가 구동된다.

function App() {
    return (
        <div>
            <h1>Hello Route</h1>
            <Link to="/">[home]</Link> 
            <Link to="/about">[about]</Link>
            {/* HTTP GET 파라미터를 포함하는 링크 구성 (한글사용X) */}
            <Link to="/department1?deptno=101&msg=hello">[컴퓨터공학과]</Link>
            <Link to="/department1?deptno=102&msg=world">[멀티미디어학과]</Link>

            <hr/>

            {/* 첫 페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시해야 한다. */}
            <Route path='/' component={Home} exact={true} />
            <Route path='/about' component={About} />
            <Route path='/department1' component={Department1} />
        </div>
    );
}

export default App;
