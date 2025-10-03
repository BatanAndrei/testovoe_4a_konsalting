'use client';

const TariffRegular = ({
  title,
  price,
  percent,
  description,
  originalPrice,
  onClick,
  isSelected,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-[#313637] w-[240px] h-[335px] border-2 ${isSelected ? 'border-[#FDB056]' : 'border-[#484D4E]'} rounded-[40px] max-[375px]:w-[100%] max-[320px]:w-[100%] max-[375px]:h-[131px] max-[320px]:h-[118px] max-[375px]:rounded-[20px] max-[320px]:rounded-[20px] max-[375px]:p-[0_22px_0_30px] max-[320px]:p-[0_11px_0_20px] max-[375px]:flex max-[320px]:flex`}
    >
      <div className="ml-[50px] w-[66px] h-[39px] rounded-b-[8px] bg-[#FD5656] flex items-center justify-center max-[375px]:hidden max-[320px]:hidden">
        <span className="text-[22px] text-[#FFFFFF] font-gilroy">
          {percent}
        </span>
      </div>
      <div className="mt-[24px] w-[100%] h-[126px] max-[375px]:w-[121px] max-[320px]:w-[107px]">
        <div className="flex justify-center w-[100%] text-[#FFFFFF] text-[26px] font-montserrat font-medium max-[375px]:text-[18px] max-[320px]:text-[16px] max-[375px]:justify-start max-[320px]:justify-start">
          {title}
        </div>
        <div className="mt-[15px] pr-[45px] flex justify-end w-[100%] h-[50px] text-[#FFFFFF] text-[50px] font-montserrat font-semibold max-[375px]:text-[34px] max-[320px]:text-[30px] max-[375px]:mt-[0px] max-[320px]:mt-[0px] max-[375px]:h-[34px] max-[320px]:h-[30px] max-[375px]:pr-[0px] max-[320px]:pr-[0px] max-[375px]:justify-start max-[320px]:justify-start">
          {price}
        </div>
        <div className="mt-[5px] pr-[40px] flex justify-end w-[100%][8px_10px_0_0] line-through text-[#919191] text-[24px] font-montserrat font-regular max-[375px]:text-[16px] max-[320px]:text-[14px] max-[375px]:pr-[0px] max-[320px]:pr-[0px] max-[375px]:m-[8px_15px_0_0] max-[320px]:m-[8px_15px_0_0] max-[375px]:w-[101px] max-[320px]:w-[90px]">
          {originalPrice}
        </div>
      </div>
      <div className="mt-[70px] p-[0_20px_0_20px] flex items-start w-[100%] h-[90px] text-[16px] text-[#FFFFFF] ont-montserrat font-regular whitespace-pre-line max-[375px]:flex max-[320px]:flex max-[375px]:flex-col max-[320px]:flex-col max-[375px]:items-start max-[320px]:items-start max-[375px]:leading-none max-[320px]:leading-none max-[375px]:text-[14px] max-[320px]:text-[14px] max-[375px]:pl-[40px] max-[320px]:pl-[40px] max-[375px]:h-[114px] max-[320px]:h-[114px] max-[375px]:mt-[0px] max-[320px]:mt-[0px]">
        <div className="block md:hidden w-[66px] h-[39px] rounded-b-[8px] bg-[#FD5656] flex items-center justify-center max-[375px]:w-[48px] max-[320px]:w-[42px] max-[375px]:h-[27px] max-[320px]:h-[23px] max-[375px]:m-[0_0_20px_100px] max-[320px]:m-[0_0_20px_70px]">
          <span className="text-[22px] text-[#FFFFFF] font-gilroy max-[375px]:text-[16px] max-[320px]:text-[13px]">
            {percent}
          </span>
        </div>
        {description}
      </div>
    </div>
  );
};

export default TariffRegular;
