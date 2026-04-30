"use client";
import {poppins} from "@/fonts";
import {TextField} from "@/components/shared/TextField/TextField";
import {PhoneNumberField} from "@/components/shared/TextField/PhoneNumberField";
import axios from "@/lib/axios";

export const AuthDialogSignUp = () => {
  async function handleSignIn() {
    const response2 = await axios.post('http://localhost:8888/auth/sign-in', {
      login: "alice@example.com",
      password: "123"
    }, {withCredentials: true});
  }

  return (
    <section className="flex flex-col w-116.75 h-149.25">
      <div className="flex flex-col gap-5 px-6 py-6 border-b border-(--white)/8">
        <h1 className={`font-bold text-[20px] ${poppins.className}`}>Ro'yxatdan o'tish</h1>
        <div className="flex w-full gap-2 p-1 bg-(--dark3) rounded-lg">
          <button className='bg-[#323639] py-2 text-center flex-1 rounded-sm font-medium text-[15px]'>Telefon raqam orqali</button>
          <button className='py-2 text-center flex-1 rounded-sm font-medium text-[15px]'>E-mail orqali</button>
        </div>
      </div>
      <div className="flex flex-col gap-6 px-6 pt-6">
        <TextField label={"Ism-sharifingiz"} placeholder={"Ism-sharifingizni kiriting"}/>
        <PhoneNumberField label={"Telefon raqamingiz"} placeholder={"__ ___ __ __"}/>
      </div>
      <div className={"flex flex-col px-6 w-full"}>
        <p className={"py-8"}>Ro‘yxatdan o‘tish tugmasini bosgach foydalanish <span>shartlari va qoidalarini</span> qabul qilaman</p>
        <button className="w-full py-2.5 bg-(--blue) rounded-lg font-medium text-[15px]">Ro'yxatdan o'tish</button>
        <div className="flex gap-4 items-center">
          <div className="h-px bg-[#D9D9D9]/10 flex-1"></div>
          <p>yoki</p>
          <div className="h-px bg-[#D9D9D9]/10 flex-1"></div>
        </div>
        <button onClick={handleSignIn} className="w-full py-2.5 bg-(--white)/10 rounded-lg font-medium text-[15px]">Kirish</button>
      </div>
    </section>
  );
};