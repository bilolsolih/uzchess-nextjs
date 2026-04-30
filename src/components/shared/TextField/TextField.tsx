import {poppins} from "@/fonts";

interface Props {
  label: string,
  placeholder: string,
}

export const TextField = ({label, placeholder}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className={`text-[15px] text-[#9DA1A3] font-medium ${poppins.className}`}>{label}</label>
      <input id={label} type="text" placeholder={placeholder} className="h-11 pl-4 bg-(--dark3) rounded-lg border border-[#36393B]"/>
    </div>
  );
};