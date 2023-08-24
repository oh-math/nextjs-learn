import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

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
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
    </Layout>
  );
}
