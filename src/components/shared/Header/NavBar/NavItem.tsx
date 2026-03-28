import Link from "next/link";

export const NavItem = ({title, url, isActive}) => {
  return (
    <li className={"relative py-2"}>
      <Link href={url} className={"text-[14px]"}>
        {title}
        {isActive && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-(--blue)"></div>}
      </Link>
    </li>
  );
};