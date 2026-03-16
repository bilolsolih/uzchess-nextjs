"use client";
import {Divider} from "@/components/shared/Header/Divider";
import {Actions} from "@/components/shared/Header/RightSide/Actions";
import {Button} from "@/components/shared/Button";

export const RightSide = () => {
  return (
    <section className={"flex gap-5 items-center ml-5"}>
      <Actions/>
      <Divider/>
      <Button label={'Kirish'} icon={'/icons/login.svg'} onClick={() => {
      }}/>
    </section>
  );
};
