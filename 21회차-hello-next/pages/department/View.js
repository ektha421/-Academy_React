/**
 * HelloWorld.js
 * 
 * 이 위치에서 이 파일의 역할을 간략히 명시합니다.
 * 
 * @author : 이 광 호 (leekh4232@gmail.com)
 */
import Layout from '../../components/Layout';
import Link from 'next/link';
import axios from 'axios';
import Router from 'next/router';

const View = ({dept_item}) => {
    const regDelete = React.useRef();

    const onDeleteClick = async (e) => {
        e.preventDefault();
        console.log(regDelete.current.dataset);
        const {deptno} = regDelete.current.dataset;

        if (confirm("정말 삭제하시겠습니까?")) {
            try {
                const formdata = new FormData();
                formdata.append('deptno', deptno);

                const response = await axios({
                    method: 'post',
                    url: 'http://itpaper.co.kr/demo/ajax/api/dept_delete.php',
                    data: formdata
                });

                const rt = response.data.rt;

                if (rt !== 'OK') {
                    alert(rt);
                    return false;
                }

                Router.push("/department/List");
            } catch (e) {
                console.log(e);
                alert("삭제에 실패했습니다.");
            }
        }
    };

    return (
        <Layout>
            <h1>학과관리 - 상세정보</h1>
            <Link href="/department/List"><a>[학과목록]</a></Link>
            <Link href="/department/Add"><a>[학과추가]</a></Link>

            {/* 페이지 이동 목적이 아닌 단순한 클릭 이벤트 발생이 목적이므로 <a>태그를 사용 */}
            <a href="#" ref={regDelete} data-deptno={dept_item.deptno} onClick={onDeleteClick}>[학과삭제]</a>
            <hr />
            <table border="1">
                <tbody>
                    <tr>
                        <th>학과번호</th>
                        <td>{dept_item.deptno}</td>
                    </tr>
                    <tr>
                        <th>학과명</th>
                        <td>{dept_item.dname}</td>
                    </tr>
                    <tr>
                        <th>위치</th>
                        <td>{dept_item.loc}</td>
                    </tr>
                </tbody>
            </table>
        </Layout>
    );
};

View.getInitialProps = async (props) => {
    const query = props.query;
    // 데이터 조회(목록, 상세)를 위한 HTTP GET 방식 접근
    const response = await axios.get('http://itpaper.co.kr/demo/ajax/api/dept_view.php', {
        params: {
            deptno: query.deptno
        }
    });
    console.log(response.data);
    return {
        dept_item: response.data.item
    }
};

export default View;