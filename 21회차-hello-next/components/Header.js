import Link from 'next/link';

const linkStyle = {
    marginRight: '1rem'
};

const Header = () => {
    return (
        <div>
            <Link href="/"><a style={linkStyle}>홈</a></Link>
            <Link href="/About"><a style={linkStyle}>소개</a></Link>
            <Link href="/GetParam"><a style={linkStyle}>GET파라미터</a></Link>
            <Link href="/department/List"><a style={linkStyle}>학과목록</a></Link>
        </div>
    );
};

export default Header;