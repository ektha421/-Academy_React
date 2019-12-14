import React from 'react';

class MyJsonArrayComponentClass extends React.Component {
    constructor(props) {
        super(props);

        this.avengers = {
            character: [
                { name: '아이언맨', actor: '로버트 다우니 주니어' },
                { name: '캡틴 아메리카', actor: '크리스 에반스' },
                { name: '토르', actor: '크리스 헴스워드' },
                { name: '헐크', actor: '마크 버팔로' },
                { name: '블랙 위도우', actor: '스칼릿 요한슨' }
            ]
        };
    }

    render() {
        // 데이터에 따라 반복적으로 표시될 컴포넌트 구현
        const avengersItem = this.avengers.character.map((item, index) => {
            return (
                <li key={index}>
                    <a href={'https://namu.wiki/w/' + item.name} target='_blank' rel='noopener noreferrer'>
                        {item.name}
                    </a>
                    <span
                        style={{
                            fontSize: '0.8em',
                            color: '#999',
                            paddingLeft: '10px',
                            fontStyle: 'italic'
                        }}>
                        ({item.actor})
                    </span>
                </li>
            );
        });

        return (
            <div>
                <h2>MyJsonArrayComponentClass</h2>
                <ul>{avengersItem}</ul>
                <hr />
            </div>
        );
    }
}

export default MyJsonArrayComponentClass;
