import Button from '../components/ui/Button/Button';
import StarIcon from '../components/StarIcon/StarIcon';
import Image from 'next/image';
import imgDesck from '../public/imgDesck.png';
import TariffCard from '../components/ui/TariffCard/TariffCard';
import AlertIcon from '../components/AlertIcon/AlertIcon';
import Checkbox from '../components/ui/Checkbox/Checkbox';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="w-[100%] h-[103px] bg-[#1D5B43] rounded-t-[60px] flex flex-col items-center justify-center max-[375px]:rounded-t-none max-[375px]:h-[85px] max-[320px]:rounded-t-none max-[320px]:h-[74px] max-[375px]:w-[375px] max-[320px]:w-[320px]">
        <span className="text-[24px] text-[#FFFFFF] font-montserrat font-semibold max-[375px]:text-[18px] max-[320px]:text-[14px]">
          Успейте открыть пробную неделю
        </span>
        <div className="w-[167px] h-[52px] flex items-center justify-between max-[375px]:w-[136px] max-[375px]:h-[42px] max-[320px]:w-[126px] max-[320px]:h-[36px]">
          <StarIcon />
          <span className="font-raleway font-bold text-[40px] text-[#FFFFFF] max-[375px]:text-[32px] max-[320px]:text-[28px]">
            02 : 00
          </span>
          <StarIcon />
        </div>
      </header>
      <main className="w-[100%] h-[1518px] bg-[#232829] rounded-b-[60px] flex justify-center max-[375px]:rounded-b-none max-[320px]:rounded-b-none max-[375px]:w-[375px] max-[320px]:w-[320px] max-[375px]:p-[0_16px_0_16px] max-[320px]:p-[0_16px_0_16px]">
        <div className="w-[1216px] h-[1518px] max-[375px]:w-[359px] max-[320px]:w-[304px]">
          <div className="mt-[50px] font-montserrat font-bold text-[40px] max-[375px]:text-[24px] max-[320px]:text-[22px] max-[375px]:mt-[20px] max-[320px]:mt-[20px] max-[375px]:mr-[60px] max-[320px]:mr-[31px]">
            <span className="text-[white]">Выбери подходящий для себя</span>
            <span className="text-[#FDB056]"> тариф</span>
          </div>
          <div className="mt-[110px] w-[1216px] h-[867px] flex items-center justify-between max-[375px]:mt-[20px] max-[320px]:mt-[24px] max-[375px]:flex max-[320px]:flex max-[375px]:flex-col max-[320px]:flex-col max-[375px]:w-[359px] max-[320px]:w-[304px]">
            <Image
              src={imgDesck}
              alt="Фото атлета"
              width={380}
              height={767}
              className="max-w-full h-auto
            max-[375px]:w-[124px] max-[375px]:h-[250px]
            max-[320px]:w-[99px] max-[320px]:h-[200px]"
            />
            <div className="w-[748px] h-[867px] max-[375px]:w-[359px] max-[320px]:w-[304px]">
              <TariffCard
                title="Навсегда"
                price="5990 ₽"
                percent="-70%"
                description="Для тех, кто хочет всегда быть в форме и поддерживать здоровье"
                shortDescription="Всегда быть в форме"
                originalPrice="18 990 ₽"
                hit
              />
              <div className="flex justify-between mt-[14px] w-[100%] h-[335px] max-[375px]:flex-col max-[320px]:flex-col max-[375px]:mt-[8px] max-[320px]:mt-[8px]">
                <TariffCard
                  percent="-50%"
                  title="3 месяца"
                  price="1990 ₽"
                  originalPrice="3990 ₽"
                  description={'Привести тело\nв порядок'}
                />
                <TariffCard
                  percent="-40%"
                  title="1 месяц"
                  price="990 ₽"
                  originalPrice="1690 ₽"
                  description={'Чтобы получить первые результаты'}
                />
                <TariffCard
                  percent="-30%"
                  title="1 неделя"
                  price="690 ₽"
                  originalPrice="990 ₽"
                  description={'Чтобы просто начать'}
                />
              </div>
              <div className="flex p-[10px_20px_18px_20px] bg-[#313637] mt-[20px] w-[499px] h-[78px] rounded-[20px]">
                <AlertIcon />
                <span className="ml-[8px] text-[#FFFFFF] text-[16px] font-montserrat font-regular">
                  Следуя плану на 3 месяца и более, люди получают в 2 раза
                  лучший результат, чем за 1 месяц
                </span>
              </div>
              <div className="flex items-center mt-[30px] w-[649px] h-[36px]">
                <Checkbox />
                <div className="m-[5px_0_0_15px] text-[#CDCDCD] text-[16px] font-montserrat font-regular leading-none">
                  Я согласен с{' '}
                  <Link href="#">
                    <span className="underline cursor-pointer">
                      офертой рекуррентных платежей
                    </span>
                  </Link>{' '}
                  и{' '}
                  <Link href="#">
                    <span className="underline cursor-pointer">
                      Политикой конфиденциальности
                    </span>
                  </Link>
                </div>
              </div>
              <Button
                title="Купить"
                className="mt-[16px] cursor-pointer w-[352px] h-[66px] rounded-[20px] bg-[#FDB056] text-[20px] font-montserrat font-bold"
              />
              <div className="mt-[14px] text-[#9B9B9B] text-[14px] w-[748px] h-[68px] font-montserrat font-regular">
                Нажимая кнопку «Купить», Пользователь соглашается на разовое
                списание денежных средств для получения пожизненного доступа к
                приложению. Пользователь соглашается, что данные
                кредитной/дебетовой карты будут сохранены для осуществления
                покупок дополнительных услуг сервиса в случае желания
                пользователя.
              </div>
            </div>
          </div>
          <div className="p-[20px] mt-[66px] w-[1216px] h-[231px] border border-[#484D4E] rounded-[30px]">
            <div className="flex items-center justify-center w-[461px] h-[68px] bg-[#2D3233] rounded-[30px] border border-[#81FE95]">
              <span className="text-[#81FE95] text-[28px] font-montserrat font-medium">
                гарантия возврата 30 дней
              </span>
            </div>
            <div className="mt-[30px] w-[1176px] h-[93px] text-[24px] text-[#DCDCDC] font-montserrat font-regular leading-tight">
              Мы уверены, что наш план сработает для тебя и ты увидишь видимые
              результаты уже через 4 недели! Мы даже готовы полностью вернуть
              твои деньги в течение 30 дней с момента покупки, если ты не
              получишь видимых результатов.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
