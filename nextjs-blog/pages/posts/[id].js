import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

// 1° faz a busca de todos os IDs possíves e retorn em { paths: { params: { id: ""}}}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}


// 2° faz a busca de todas as propriedades estaticas com base nos IDs retornados no passo 1
// e retorna
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  console.log(postData);
  return {
    props: {
      postData,
    },
  };
}


export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </Layout>
  );
}
