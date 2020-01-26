import Layout from '../../components/Layout';
import axios from 'axios';
import Router from 'next/router';

const Add = () => {

    /** <input> 태그에 대한 참조변수 */
    const refDname = React.useRef();
    const refLoc = React.useRef();

    /** form에 대한 전송 이벤트 정의 --> ajax 처리를 수행할 것이므로 async 명시 */
    const onDeptFormSubmit = async (e) => {
        // submit 전송이 되지 않도록 차단
        e.preventDefault();

        // 참조변수를 통해 <input>태그에 대한 입력값을 가져온다.
        const dname = refDname.current.value;
        const loc = refLoc.current.value;

        try {
            const formdata = new FormData();
            formdata.append('dname', dname);
            formdata.append('loc', loc);
            
            const response = await axios({
                method: 'post',
                url: 'http://itpaper.co.kr/demo/ajax/api/dept_write.php',
                data: formdata
            });
            
            if (response.data.rt !== 'OK') {
                alert(response.data.rt);
                return false;
            }

            Router.push("/department/View?deptno=" + response.data.deptno);
        } catch (e) {
            console.log(e);
            alert("저장에 실패했습니다.");
        }
    };

    return (
        <Layout>
            <h1>학과관리 - 추가하기</h1>
            <hr />
            <form name="deptForm" onSubmit={onDeptFormSubmit}>
                <div>
                    <label style={{display: 'inline-block', width: '80px'}} htmlFor="dname">학과이름</label>
                    <input type="text" id="dname" name="dname" ref={refDname} />
                </div>
                <div>
                    <label style={{display: 'inline-block', width: '80px'}} htmlFor="loc">위치</label>
                    <input type="text" id="loc" name="loc" ref={refLoc} />
                </div>
                <div style={{paddingLeft: '80px'}}>
                    <button type="submit">저장</button>
                </div>
            </form>
        </Layout>
    );
};

export default Add;