"use client";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";

export const LanguageSelector = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
      <div ref={ref}
           onClick={() => setIsExpanded(prevState => !prevState)}
           className={"flex gap-2 font-medium hover:cursor-pointer relative"}>
        <h3 className={"font-medium"}>Uzbek</h3>
        <Image src={'/icons/arrow.svg'}
               alt={'language selector arrow'}
               width={24}
               height={24}
               className={"w-6 h-6"}
        />

        {isExpanded &&
          <ul className={"absolute -left-5 rounded-lg bg-(--dark) border border-(--stroke) top-8.25 min-w-40.5c"}>
            <li className={"px-4 py-3"}>Uzbek</li>
            <li className={"px-4 py-3"}>English</li>
            <li className={"px-4 py-3"}>Russian</li>
          </ul>
        }
      </div>
  );
};
