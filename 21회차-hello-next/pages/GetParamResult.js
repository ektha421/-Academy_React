import Layout from '../components/Layout';
import Head from 'next/head';

const GetParamResult = (props) => {
    const {query} = props;

    return (
        <Layout>
            <Head>
                <title>Next ::: 퀴즈풀이</title>
            </Head>
            {query.ans && query.ans == 300 ? (
                <h1 style={{color: 'green'}}>정답입니다.</h1>
            ) : (
                <h1 style={{color: 'red'}}>오답입니다.</h1>
            )}
        </Layout>
    );
};

GetParamResult.getInitialProps = (props) => {
    // {pathname: "/getparamresult", query: {…}, asPath: "/getparamresult?ans=100" }
    console.log(props);
    return { query: props.query };
};

export default GetParamResult;