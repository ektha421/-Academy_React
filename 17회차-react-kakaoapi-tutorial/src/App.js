import React from 'react';
import { Route } from 'react-router-dom';
import KakaoImageSearch from './pages/KakaoImageSearch';

/**
 * 프로그램 본체
 *
 * 아래의 구조로 연결됨.
 * App --(route)--> KakaoImageSearch --> Form
 *                                   --> ImageList --> ImageItem
 */
const App = () => {
    return (
        <div>
            {/* ":변수이름?" 에서 물음표는 해당 변수가 선택적이라는 의미 */}
            <Route path='/:query?' component={KakaoImageSearch} />
        </div>
    );
};

export default App;
