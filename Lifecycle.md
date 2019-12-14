# 리액트 라이프 사이클(수명주기)

[흐름도](http://projects.wojtekmaj.pl/react-lifesycle-methods-diagram/)

컴포넌트가 생성되고 삭제되기까지 순차적으로 호출되는 메서드들에 대한 일련의 흐름.

클래스형 컴포넌트에서만 사용할 수 있다.(함수형 컴포넌트는 Hook이라는 대체 기능을 제공함)

## 라이프 사이클을 구분하는 세 가지 카테고리

### #01. Mount

DOM이 생성되고 웹 브라우저 상에 나타나는 것.

> constructor > getDerivedStateFormProps > render > componentDidMount

| 메서드 이름 | 설명 |
| ------------| ----|
| **constructor** | 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드 |
| getDerivedStateFormProps | 마운트 과정과 업데이트 과정의 가장 처음에 호출된다. props의 변화에 따라
state 값에도 변화를 주고자 하는 경우 사용한다.
| **render** | UI를 화면에 출력하는 메서드 |
| **componentDidMount** | 컴포넌트가 웹 브라우저상에 나타난 후 호출되는 메서드 |

### #02. Update
다음의 상황 중 하나의 경우에 자동으로 실행됨

1. props값이 변경될 때
2. state 값이 변경될 때
3. 부모 컴포넌트가 리렌더링 될 때
4. this.forceUpdate 메서드로 강제 렌더링을 요청할 때

> 네가지 중 하나의 상황 발생 > getDetivedStateFormProps > shuldComponentUpdate > getSnapshotBeforeUpdate > componentDidUpdate

| 메서드 이름 | 설명 |
| ------------| ----|
| getDetivedStateFormProps | 마운트 과정과 업데이트 과정의 가장 처음에 호출됨. props의 변화에 따라 state값에도 변화를 주고자 하는 경우 사용 |
| **shuldComponentUpdate** | 컴포넌트가 render()를 실행할 지 여부를 결정하는 함수. true를 반환하면 실행됨.<br/>
forceUpdate()함수에 의한 강제 렌더링 시에는 이 함수가 실행되지 않음
| getSnapshotBeforeUpdate | 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출됨 |
| componentDidUpdate | 컴포넌트의업데이 작업이 끝난 후 호출됨 |

### #03. Unmount
