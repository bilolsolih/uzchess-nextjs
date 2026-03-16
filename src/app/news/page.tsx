import {getNews} from "@/lib/api/news";
import NewsItem from "@/components/news/NewsItem";
import {News} from "@/types/news";

export default async function NewsPage() {
    const news = await getNews();
    return <div className="w-full grid justify-items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,20.375rem)] gap-6">
        {news.map((newsItem: News) => <NewsItem key={newsItem.id} news={newsItem}/>)}
    </div>
}