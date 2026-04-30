"use client";
import {Breadcrumbs} from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Image from "next/image";

export default function Home() {
  return <>
    <Breadcrumbs/>

    <main className={"flex flex-col grow w-full px-8"}>
      <article className="flex flex-col w-81.5 rounded-lg overflow-hidden">
        <header className="flex justify-between items-center h-14.5 px-4 bg-[#272B30]">
          <h1 className="text-[20px] font-medium">Kun o'yini</h1>
          <button className="flex gap-1 items-center">
            Ko'rish
            <Image src={'/icons/right-arrow.svg'} alt={'right arrow icon'} width={20} height={20}/>
          </button>
        </header>
        <section className="relative w-81.5 h-45.75">
          <Image className="absolute object-cover overflow-hidden w-full h-45.75" src={'/images/game1.png'} alt={"Game image"} width={326} height={183}/>
          <div className="absolute w-full h-full bg-[#091013]/64 flex items-center justify-center">
            <Image src='/icons/play.svg' alt='play icon' width={56} height={56} className="absolute"/>
          </div>
          <div className="absolute bottom-0 left-0 w-full flex justify-between items-center h-11 px-4 bg-[#1A1D1F]/40 backdrop-blur-sm border-t border-[#FFFFFF]/20">
            <p>5:30</p>
            <Image src={'/icons/bullet.svg'} alt={'bullet icon'} width={20} height={20}/>
          </div>
        </section>

        <footer className="h-17 flex justify-between items-center px-2 bg-(--dark)">
          <div className="flex gap-2 items-center w-full">
            <div className="shrink-0 w-5 h-9 flex justify-center items-center rounded-xs bg-(--green)">
              <Image src='/icons/thumbs-up.svg' alt='thumbs up icon' width={12} height={12} className="w-3 h-3 object-cover"/>
            </div>
            <p className="line-clamp-2 break-all text-[14px] font-medium">Abdusattorov Nodirbek</p>
          </div>

          <Image src='/icons/fighting-game.svg' alt='two swords icon' width={32} height={32} className="w-8 h-8 drop-shadow-[0_0_16px_var(--blue)] mx-1"/>

          <div className="flex gap-2 items-center w-full">
            <p className="text-right line-clamp-2 break-all text-[14px] font-medium">Magnus Carlson</p>
            <div className="shrink-0 w-5 h-9 flex justify-center items-center rounded-xs bg-(--red)/10">
              <Image src='/icons/thumbs-down.svg' alt='thumbs up icon' width={12} height={12} className="w-3 h-3 object-cover"/>
            </div>
          </div>
        </footer>
      </article>
    </main>
  </>
}
