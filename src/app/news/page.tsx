import {getNews} from "@/lib/api/news";
import NewsItem from "@/components/news/NewsItem";
import {News} from "@/types/news";
import {Breadcrumbs} from "@/components/shared/Breadcrumbs/Breadcrumbs";
import {TitleBar} from "@/components/news/TitleBar";

export default async function NewsPage() {
  const news = await getNews();


  return <main className={"flex flex-col grow w-full"}>
    <Breadcrumbs items={[{label: 'Yangiliklar', link: '/news'}]}/>
    <TitleBar/>
    <div
      className="self-center grid justify-center mt-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(4,20.375rem)] gap-6">
      {news.map((newsItem: News) => <NewsItem key={newsItem.id} news={newsItem}/>)}
    </div>
  </main>
}