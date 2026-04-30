import Link from "next/link";
import Image from "next/image";
import RatingItemInMain from "@/app/tmp/RatingItemInMain";


const TemporaryPage = async () => {
  return <>
    <article className="flex flex-col w-81.5 py-4 bg-(--dark) rounded-xl border border-[#1A2226]">
      <header className="flex justify-between px-4 pb-3 border-b border-[#1A2226]">
        <h1 className="text-[20px] font-medium text-(--white)">Reyting</h1>
        <Link href={'#'} className="flex gap-1 items-center text-(--secondary-low)">
          Barchasi
          <Image src='/icons/right-arrow.svg' alt='right arrow icon' width={20} height={20}/>
        </Link>
      </header>
      <section className="px-4">
        <RatingItemInMain/>
        <RatingItemInMain/>
        <RatingItemInMain/>
        <RatingItemInMain/>
        <RatingItemInMain/>
      </section>
    </article>
  </>;
};

export default TemporaryPage;
