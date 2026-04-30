import {News} from "@/types/news";

export async function getNews(search?: string): Promise<News[]> {
  let url = 'http://localhost:8888/public/news';
  if (search) {
    url = url + '?search=' + search;
  }
  try {
    const res = await fetch(url, {
      cache: 'force-cache',
      next: {
        revalidate: 60,
      }
    });
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    data.forEach((x) => x.date = Date.parse(x.date));
    return data;

  } catch {
    return [];
  }


}

export async function getOneNews(id: number): Promise<News> {
  const res = await fetch(`http://localhost:8888/public/news/${id}`, {
    cache: 'force-cache',
    next: {
      revalidate: 60,
    }
  });
  const data = await res.json();
  data.date = Date.parse(data.date);
  return data;


}