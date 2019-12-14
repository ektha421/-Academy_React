import React from 'react';

class MyArrayComponentClass3 extends React.Component {
    constructor(props) {
        super(props);
        this.avengers = ['아이언맨', '캡틴 아메리카', '토르', '헐크'];
    }

    render() {
        return (
            <div>
                <h2>MyArrayComponentClass3</h2>
                <ul>
                    {/* 다른 컴포넌트를 참조. props로 배열 자체를 전달함 */}
                    <MyAvengersItemClass data={this.avengers} />
                </ul>
                <hr />
            </div>
        );
    }
}

/** 컴포넌트가 전달받은 props에 의해 자체적으로 반복적인 처리를 수행하는 경우 */
class MyAvengersItemClass extends React.Component {
    render() {
        return (
            this.props.data.map((item, index) => {
                return (<li key={index}>{item}</li>)
            })
        );
    }
}

export default MyArrayComponentClass3;
