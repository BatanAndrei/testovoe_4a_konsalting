import Button from '../components/ui/Button/Button';
import StarIcon from '../components/StarIcon/StarIcon';

export default function Home() {
  return (
    <>
      <header className='w-[100%] h-[103px] bg-[#1D5B43] rounded-t-[60px] flex flex-col items-center justify-center'>
        <span className='text-[24px] text-[#FFFFFF] font-montserrat font-semibold'>Успейте открыть пробную неделю</span>
        <div className='w-[167px] h-[52px] border border-black'>
          <StarIcon />
        </div>
      </header>
      <main className='w-[100%] h-[1518px] bg-[#232829] rounded-b-[60px] flex justify-center'>
        
        {/* <Button title='Купить' className='w-[352px] h-[66px] rounded-[20px] bg-[#FDB056] text-[20px] font-montserrat font-bold' /> */}
      </main>
    </>
  )
}