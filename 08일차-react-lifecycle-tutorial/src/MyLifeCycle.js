import React from 'react';

class MyLifeCycle extends React.Component {
    /**
     * [Mount] (1) 컴포넌트 생성자
     * 컴포넌트가 생성될 때 최초 1회만 실행된다.
     * 이 메서드의 용도는 초기 state값을 결정하는 것이다.
     *
     * @param {*} props
     */
    constructor(props) {
        super(props);
        console.log('[Mount] (1) 컴포넌트 생성자');
        /** update 상태를 확인하기 위한 state 값 생성 */
        // (필요하다면) 초기 state값 결정
        this.state = {
            number: 0
        };
    }

    /**
     * [Mount] (3) 렌더링 함수
     * 라이프사이클 메서드 중 유일한 필수 메서드
     * 이 메서드 안에서 this.props나 this.state에 접근할 수 있으며,
     * 리액트 요소(HTML태그,다른 컴포넌트)를 반한다.
     * 
     * 이 메서드 안에서는 이벤트 설정이 아닌 곳에서 setState()를 사용 하면 안되며
     * 브라우저의 DOM에 접근해서도 안된다.
     * 
     * DOM 정보를 가져오거나 state에 변화를 줄 때는 componentDidMount()에서 처리해야 한다.

     */
    render() {
        console.log('[Mount] (3) render가 실행되었습니다.');
        return (
            <div>
                <h2>MyLifeCycle</h2>
                <p>3의 배수 단위로 갱신됨.</p>
                <h3>{this.state.number}</h3>

                <button type="button" onClick={e => {
                     this.setState({
                        number: this.state.number + 1
                    });
                }}>
                    Plus(1)
                </button>
            </div>
        );
    }

    /**
     * [Mount] (4) render() 함수에 의해 브라우저에게 DOM이 표시된 후 호출된다.
     * jQuery Plugin등의 기타 외부 라이브러리로 DOM을 제어하고자 할 경우 이 위치에서 구현해야 한다.
     * setTimeout, setInterval, Ajax 요청 같은 작업도 이 함수 안에서 구현한다.
     */
    componentDidMount() {
        console.log('[Mount] (4) componentDitMount가 실행되었습니다.');
    }

    /** [Update] (2) return이 true인 경우만 render()가 실행된다. */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Unmount] (2) shouldComponentUpdate 실행되었습니다.');
        // 이 안에서의 this.state.number는 before 상태를 의미.
        // 현재 상태의 값은 nextState.number 접근해야 함
        console.log(" >> 원본state=%d, nextState=%d", this.state.number, nextState.number);

        // 상태값이 3의 배수만 경우만 화면을 갱신하도록(render()가 실행되도록) 제어
        let refresh = true;

        if (nextState.number % 3 !== 0) {
            refresh = false;
        }

        return refresh;
    }
    
    /** [Update] (3) 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출된다. */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Unmount] (3) getSnapshotBeforeUpdate 실행되었습니다.');
    }
    
    /** [Update] (4) 컴포넌트의 업데이트 작업이 끝난 후 호출된다. */
    componentDidUpdate(prevProps, prevState) {
        console.log('[Unmount] (4) componentDidUpdate 실행되었습니다.');
    }

    /** [Unmound] 컴포넌트가 화면에서 제거될 때 호출 */
    componentWillUnmount() {
        console.log('[Unmount] componentWillUnmount가 실행되었습니다.');
    }
}

export default MyLifeCycle;
