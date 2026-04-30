import {BreadcrumbsItem} from "@/components/shared/Breadcrumbs/BreadcrumbsItem";

interface Item {
  label: string;
  link: string;
}

interface Props {
  items?: Item[];
}

export const Breadcrumbs = ({items}: Props) => {
  return (
    <section className={"flex gap-2 h-11 pl-15.5 items-center"}>
      <BreadcrumbsItem label={"Asosiy"} link={"/"} icon={"/icons/home.svg"} active={!items} size={20}/>
      {items && items.map((item, index) => <BreadcrumbsItem key={item.link} label={item.label} link={item.link} active={index === items.length - 1}/>)}
    </section>
  );
};
