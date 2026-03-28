import Image from "next/image";
import Link from "next/link";

interface Props {
  label: string;
  icon?: string;
  link: string;
  active?: boolean;
  size?: number;
}

export const BreadcrumbsItem = ({label, icon, link, active, size}: Props) => {
  icon = icon ?? "/icons/rook.svg";
  size = size ?? 8;

  return (
    <Link href={link} className={"flex gap-2"}>
      <Image src={icon} alt={'Breadcrumbs icon'} width={size} height={size} className={`w-[${size}px] h-[${size}px]`}/>
      <h3 className={`max-w-120 line-clamp-1 ${active ? 'text-white' : 'text-[#6D7274]'} font-medium text-[14px]`}>{label}</h3>
    </Link>
  );
};