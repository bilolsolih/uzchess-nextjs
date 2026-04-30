import Image from "next/image";
import {AuthDialogRightSide} from "@/components/shared/AuthDialog/AuthDialogRightSide";
import {AuthDialogSignUp} from "@/app/auth/sign-up/components/AuthDialogSignUp";

const SignUpPage = async () => {
  return (
    <>
      <div className="fixed flex flex-col items-center gap-18 w-screen h-screen bg-[#0C0E0F]/94">
        <Image src='/images/logo.png' alt='Site logo' width={169} height={42} className={"w-42.25 h-10.5"}/>
        <div className='flex gap-3'>
          <div className='flex w-min rounded-xl bg-(--dark)'>
            <AuthDialogSignUp/>
            <AuthDialogRightSide/>
          </div>
          <button className="w-10 h-10 rounded-lg bg-(--dark)">X</button>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
