import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';

const GetParam = () => {
    return (
        <Layout>
            <Head>
                <title>Next ::: 퀴즈를 맞춰봅시다.</title>
            </Head>
            <h1>100 + 200 = ?</h1>
            <ul>
                {/* pages폴더 내의 "폴더/파일이름" -> 대소문자 구분X  */}
                <li><Link href="/GetParamResult/?ans=100"><a>100</a></Link></li>
                <li><Link href="/GetParamResult/?ans=200"><a>200</a></Link></li>
                <li><Link href="/GetParamResult/?ans=300"><a>300</a></Link></li>
                <li><Link href="/GetParamResult/?ans=400"><a>400</a></Link></li>
            </ul>
        </Layout>
    );
};

export default GetParam;