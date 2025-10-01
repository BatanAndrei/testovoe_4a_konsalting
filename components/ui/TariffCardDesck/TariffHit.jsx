const TariffHit = ({ title, price, percent, description, originalPrice }) => {
  return (
    <div className="bg-[#313637] pl-[50px] pr-[20px] w-[100%] h-[190px] border-2 border-[#484D4E] rounded-[40px] flex justify-between">
      <div className="w-[66px] h-[39px] rounded-b-[8px] bg-[#FD5656] flex items-center justify-center">
        <span className="text-[22px] text-[#FFFFFF] font-gilroy">
          {percent}
        </span>
      </div>
      <div className="mt-[24px] w-[178px] h-[126px]">
        <div className="flex justify-center text-[#FFFFFF] text-[26px] font-montserrat font-medium">
          {title}
        </div>
        <div className="flex justify-center w-[178px] h-[50px] text-[#FDB056] text-[50px] font-montserrat font-semibold">
          {price}
        </div>
        <div className="flex justify-end m-[8px_10px_0_0] line-through text-[#919191] text-[24px] font-montserrat font-regular">
          {originalPrice}
        </div>
      </div>
      <div className="pb-[20px] flex items-center w-[328px] h-[190px] text-[16px] text-[#FFFFFF] ont-montserrat font-regular">
        {description}
      </div>
      <div className="mt-[10px] text-[#FDB056] text-[22px] font-montserrat font-medium">
        хит!
      </div>
    </div>
  );
};

export default TariffHit;
