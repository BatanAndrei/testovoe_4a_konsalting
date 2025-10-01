const TariffHit = ({ title, price, percent, description, originalPrice, shortDescription }) => {
  return (
    <div className="bg-[#313637] p-[0_20px_0_50px] w-[100%] h-[190px] border-2 border-[#484D4E] rounded-[40px] flex justify-between max-[375px]:h-[131px] max-[320px]:h-[118px] max-[375px]:p-[0_22px_0_30px]  max-[320px]:p-[0_11px_0_20px] max-[375px]:rounded-[20px] max-[320px]:rounded-[20px]">
      <div className="w-[66px] h-[39px] rounded-b-[8px] bg-[#FD5656] flex items-center justify-center max-[375px]:hidden max-[320px]:hidden">
        <span className="text-[22px] text-[#FFFFFF] font-gilroy">
          {percent}
        </span>
      </div>
      <div className="mt-[24px] w-[178px] h-[126px] max-[375px]:w-[121px] max-[320px]:w-[107px] max-[375px]:h-[91px] max-[320px]:h-[78px] max-[375px]:mt-[20px] max-[320px]:mt-[20px]">
        <div className="flex justify-center text-[#FFFFFF] text-[26px] font-montserrat font-medium max-[375px]:text-[18px] max-[320px]:text-[16px] max-[375px]:justify-start max-[320px]:justify-start">
          {title}
        </div>
        <div className="flex justify-center w-[178px] h-[50px] text-[#FDB056] text-[50px] font-montserrat font-semibold max-[375px]:text-[34px] max-[320px]:text-[30px] max-[375px]:justify-start max-[320px]:justify-start max-[375px]:w-[121px] max-[320px]:w-[107px] max-[375px]:h-[34px] max-[320px]:h-[30px]">
          {price}
        </div>
        <div className="flex justify-end m-[8px_10px_0_0] line-through text-[#919191] text-[24px] font-montserrat font-regular max-[375px]:text-[16px] max-[320px]:text-[14px] max-[375px]:m-[8px_15px_0_0] max-[320px]:m-[8px_15px_0_0]">
          {originalPrice}
        </div>
      </div>
      <div className="hidden md:block pb-[20px] flex items-center w-[328px] h-[190px] text-[16px] text-[#FFFFFF] font-montserrat font-regular max-[375px]:w-[120px] max-[320px]:w-[120px] max-[375px]:h-[56px] max-[320px]:h-[56px] max-[375px]:text-[14px] max-[320px]:text-[14px]">
        {description}
      </div>
      <div className="block md:hidden pb-[20px] flex items-center w-[328px] h-[190px] text-[16px] text-[#FFFFFF] font-montserrat font-regular max-[375px]:w-[120px] max-[320px]:w-[120px] max-[375px]:h-[56px] max-[320px]:h-[56px] max-[375px]:text-[14px] max-[320px]:text-[14px]">
        {shortDescription}
      </div>
      <div className="mt-[10px] text-[#FDB056] text-[22px] font-montserrat font-medium">
        хит!
      </div>
    </div>
  );
};

export default TariffHit;
