import Button from '../components/ui/Button/Button';
import StarIcon from '../components/StarIcon/StarIcon';
import Image from 'next/image';
import imgDesck from '../public/imgDesck.png';
import TariffCardDesck from '../components/ui/TariffCardDesck/TariffCardDesck';
import AlertIcon from '../components/AlertIcon/AlertIcon';

export default function Home() {

  return (
    <>
      <header className='w-[100%] h-[103px] bg-[#1D5B43] rounded-t-[60px] flex flex-col items-center justify-center'>
        <span className='text-[24px] text-[#FFFFFF] font-montserrat font-semibold'>Успейте открыть пробную неделю</span>
        <div className='w-[167px] h-[52px] flex items-center justify-between'>
          <StarIcon />
            <span className='font-raleway font-bold text-[40px] text-[#FFFFFF]'>02 : 00</span>
          <StarIcon />
        </div>
      </header>
      <main className='w-[100%] h-[1518px] bg-[#232829] rounded-b-[60px] flex justify-center'>
        <div className='w-[1216px] h-[1518px]'>
          <div className='mt-[50px] font-montserrat font-bold text-[40px]'>
            <span className='text-[white]'>Выбери подходящий для себя</span>
            <span className='text-[#FDB056]'> тариф</span>
          </div>
          <div className='mt-[110px] w-[1216px] h-[867px] flex items-center justify-between'>
             <Image src={imgDesck} alt="Фото атлета" width={380} height={767} />
             <div className='w-[748px] h-[867px] border border-green-500'>
              <TariffCardDesck title='Навсегда' price='5990 ₽' percent='-70%' description='Для тех, кто хочет всегда быть в форме и поддерживать здоровье' originalPrice='18 990 ₽' hit />
              <div className='flex justify-between mt-[14px] w-[100%] h-[335px]'>
                <TariffCardDesck percent='-50%' title='3 месяца' price='1990 ₽' originalPrice='3990 ₽' description={'Привести тело\nв порядок'}/>
                <TariffCardDesck percent='-40%' title='1 месяц' price='990 ₽' originalPrice='1690 ₽' description={'Чтобы получить первые результаты'}/>
                <TariffCardDesck percent='-30%' title='1 неделя' price='690 ₽' originalPrice='990 ₽' description={'Чтобы просто начать'}/>
              </div>
              <div className='flex p-[10px_20px_18px_20px] bg-[#313637] mt-[20px] w-[499px] h-[78px] rounded-[20px]'>
                <AlertIcon />
                <span className='ml-[8px] text-[#FFFFFF] text-[16px] font-montserrat font-regular'>Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц</span>
              </div>
             </div>
          </div>
          <div className='mt-[66px] w-[1216px] h-[231px] border border-red-500'>
           
          </div>
        </div>
        {/* <Button title='Купить' className='w-[352px] h-[66px] rounded-[20px] bg-[#FDB056] text-[20px] font-montserrat font-bold' /> */}
      </main>
    </>
  )
}