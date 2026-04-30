"use client";
import {poppins} from "@/fonts";
import {useRef, useState} from "react";

interface Props {
  label: string,
  placeholder: string,
}

export const PhoneNumberField = ({label, placeholder}: Props) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  function format(value: string) {
    const cleaned = value.replace(/\D/g, '');
    const number: string[] = [];
    if (cleaned.length > 0) {
      number.push(cleaned.substring(0, 2));
    }
    if (cleaned.length >= 3) {
      number.push(cleaned.substring(2, 5));
    }
    if (cleaned.length >= 6) {
      number.push(cleaned.substring(5, 7));
    }
    if (cleaned.length >= 8) {
      number.push(cleaned.substring(7, 9));
    }

    return number.join(' ');
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className={`text-[15px] text-[#9DA1A3] font-medium ${poppins.className}`}>{label}</label>
      <div className={"flex items-center h-11 pl-4 rounded-lg border border-[#36393B]"}>
        <p className="pr-3 text-center bg-(--dark)">+998</p>
        <input id={label} ref={inputRef} type="text" value={format(phoneNumber)}
               onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))} placeholder={placeholder}
               className="bg-(--dark3) w-full h-full pl-2"/>
      </div>
    </div>
  );
};