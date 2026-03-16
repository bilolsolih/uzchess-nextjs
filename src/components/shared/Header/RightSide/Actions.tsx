import {Action} from "@/components/shared/Header/RightSide/Action";

export const Actions = () => {
  return (
    <div className={"flex gap-6"}>
      <Action icon={'/icons/search-white.svg'} onClick={() => {
      }}/>

      <Action icon={'/icons/cart-empty.svg'} onClick={() => {
      }}/>

      <Action icon={'/icons/notifications.svg'} onClick={() => {
      }}/>
    </div>
  );
};