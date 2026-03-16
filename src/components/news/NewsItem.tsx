import {News} from "@/types/news";
import Image from 'next/image';

interface Props {
  news: News
}

export default function NewsItem({news}: Props) {
  return (
    <article
      className="flex flex-col w-81.5 h-62.75 rounded-lg p-3 bg-[#1A1D1F] hover:cursor-pointer hover:scale-105 transition-all duration-100 ease-out active:scale-104">
      <Image
        src={news.image}
        alt="news image"
        width={302}
        height={113}
        className="w-75.5 h-28.25 rounded-t-sm object-cover object-[0_-10px] overflow-hidden"/>

      <p className="text-[#F7F9FA]/40 mt-1.75">{news.date}</p>
    </article>
  );
}