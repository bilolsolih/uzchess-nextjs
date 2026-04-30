import Image from "next/image";

const RatingItemInMain = async () => {
  return <div className="flex justify-between pt-2.5 border-t border-[#1A2226]">
    <div className="flex gap-2 items-center">
      <Image src='/icons/crown.svg' alt='crown icon' width={16} height={16}/>
      <p>Magnus Carlson</p>
      <Image src='/icons/up-arrow.svg' alt='up arrow icon' width={16} height={16}/>
    </div>
    <p>2861</p>
  </div>;
};

export default RatingItemInMain;