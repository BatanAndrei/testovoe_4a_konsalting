const TariffRegular = ({ title, price, percent, description, originalPrice }) => {
	return (
		<div className='bg-[#313637] w-[240px] h-[335px] border-2 border-[#484D4E] rounded-[40px]'>
			<div className='ml-[50px] w-[66px] h-[39px] rounded-b-[8px] bg-[#FD5656] flex items-center justify-center'>
				<span className='text-[22px] text-[#FFFFFF] font-gilroy'>{percent}</span>
			</div>
			<div className='mt-[24px] w-[100%] h-[126px]'>
				<div className='flex justify-center w-[100%] text-[#FFFFFF] text-[26px] font-montserrat font-medium'>{title}</div>
				<div className='mt-[15px] flex justify-center w-[100%] h-[50px] text-[#FFFFFF] text-[50px] font-montserrat font-semibold'>{price}</div>
				<div className='pr-[40px] flex justify-end w-[100%] m-[8px_10px_0_0] line-through text-[#919191] text-[24px] font-montserrat font-regular'>{originalPrice}</div>
			</div>
			<div className='p-[0_20px_0_20px] flex items-center w-[100%] h-[190px] text-[16px] text-[#FFFFFF] ont-montserrat font-regular whitespace-pre-line'>{description}</div>
		</div>
	)
}

export default TariffRegular;