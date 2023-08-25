import Head from "next/head";
import DateComponent from "../../components/date";
import Layout from "../../components/layout";
import { IPostDataWithHTML } from "../../lib/interfaces/post-with-html.interface";
import { getAllPostIds, getCompletePostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

// 1° faz a busca de todos os IDs possíves e retorna em { paths: { params: { id: ""}}}
export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

// 2° faz a busca de todas as propriedades estaticas com base nos IDs retornados no passo 1
// e retorna
export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getCompletePostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }: { postData: IPostDataWithHTML }) {
  const { contentHtml, matterData } = postData;

  return (
    <Layout home={false}>
      <Head>
        <title>{matterData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{matterData.title}</h1>
        <div className={utilStyles.lightText}>
          <DateComponent dateString={matterData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
      </article>
    </Layout>
  );
}
