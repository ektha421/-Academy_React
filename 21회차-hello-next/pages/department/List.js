import Layout from '../../components/Layout';
import Link from 'next/link';
import axios from 'axios';

const List = ({dept_list}) => {
    return (
        <Layout>
            <h1>학과관리</h1>
            <Link href="/department/Add"><a>[학과추가]</a></Link>

            <hr />
            <table border="1">
                <thead>
                    <tr>
                        <th>학과번호</th>
                        <th>학과명</th>
                        <th>위치</th>
                    </tr>
                </thead>
                <tbody>
                    {dept_list.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.deptno}</td>
                                <td><Link href={"/department/View?deptno=" + item.deptno}><a>{item.dname}</a></Link></td>
                                <td>{item.loc}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Layout>
    );
};

/**
 * 페이지가 로드 되기 전에 실행된다.
 * 1) Get 파라미터 초기화
 * 2) 화면이 열림과 동시에 Ajax로 가져와야할 데이터를 로드 
 */
List.getInitialProps = async (props) => {
    const response = await axios.get('http://itpaper.co.kr/demo/ajax/api/dept_list.php');
    console.log(response.data);
    return {
        dept_list: response.data.item
    }
};

export default List;

// prefetch 