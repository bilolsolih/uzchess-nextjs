"use client";
import {usePathname} from "next/navigation";
import {NavItem} from "@/components/shared/Header/NavBar/NavItem";

const destinations = [
  {title: 'Asosiy', url: '/'},
  {title: 'Yangiliklar', url: '/news'},
  {title: 'Kurslar', url: '/courses'},
  {title: 'Kutubxona', url: '/library'},
  {title: 'Bog\'lanish', url: '/contact-us'},
]

export const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className={"flex flex-row gap-10"}>
        {destinations.map((dest) => {
          const isActive = pathname === dest.url;
          return <NavItem key={dest.url} isActive={isActive} {...dest}/>
        })}
      </ul>
    </nav>
  );
};