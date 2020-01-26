import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

/** Route 관련 참조 */
import { BrowserRouter } from 'react-router-dom';

/** 리덕스를 위한 참조 추가 */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/** 미들웨어를 위한 참조 추가 */
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

/** 리덕스 스토어에 등록시킬 모듈들 일괄 참조 */
import rootReducer from './modules';

/** 리덕스 스토어 생성 */
const logger = createLogger();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
