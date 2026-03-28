import {Breadcrumbs} from "@/components/shared/Breadcrumbs/Breadcrumbs";
import {getOneNews} from "@/lib/api/news";
import {Metadata} from "next";
import Editor from "@/components/news/editor/Editor";

export const metadata: Metadata = {
  title: "Banzay!!!",
}

const NewsDetailPage = async ({params}) => {
  const {id} = await params;
  const news = await getOneNews(id);
  return <main className={"flex flex-col grow w-full"}>
    <Breadcrumbs items={[{label: 'Yangiliklar', link: '/news'}, {label: news.content, link: `/news/${id}`}]}/>
    <Editor/>
  </main>

};

export default NewsDetailPage;
