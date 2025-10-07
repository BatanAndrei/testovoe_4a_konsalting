'use client';

import Button from '../components/ui/Button/Button';
import StarIcon from '../components/Icons/StarIcon/StarIcon';
import Image from 'next/image';
import imgDesck from '../public/imgDesck.png';
import AlertIcon from '../components/Icons/AlertIcon/AlertIcon';
import Checkbox from '../components/ui/Checkbox/Checkbox';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { RequestGetAllTariff } from '../redux/thunks/getAllTariffCard';
import RenderTariffCard from '../features/RenderTariffCard/RenderTariffCard';
import Timer from '../features/Timer/Timer';

export default function Home() {
  const [selectedTarriff, setSelectedTariff] = useState(null);
  const [isBlinking, setIsBlinking] = useState('');
  const [isCheckedCheckbox, setIsCheckedCheckbox] = useState(false);
  const [validationCheckbox, setValidationCheckbox] = useState(true);
  const dataAllTariff = useSelector(
    (state) => state.extraAllTariff.dataAllTariff
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RequestGetAllTariff());
  }, [dispatch]);

  const handleTariffClick = (index) => {
    setSelectedTariff(index);
  };

  const handleClickBuy = () => {
    if (isCheckedCheckbox && selectedTarriff) {
      setIsBlinking('animate-pulse');
      setValidationCheckbox(true);
    } else if (!isCheckedCheckbox) {
      setValidationCheckbox(false);
    }
  };

  const handleChangeChecked = (e) => {
    const checkedValue = e.target.checked;
    setIsCheckedCheckbox(checkedValue);
    if (checkedValue) {
      setValidationCheckbox(true);
    }
    if (!checkedValue) {
      setIsBlinking('');
    }
  };

  return (
    <>
      <header className="w-[100%] h-[103px] bg-[#1D5B43] rounded-t-[60px] flex flex-col items-center justify-center max-[375px]:rounded-t-none max-[375px]:h-[85px] max-[320px]:rounded-t-none max-[320px]:h-[74px] max-[375px]:w-[375px] max-[320px]:w-[320px]">
        <span className="text-[24px] text-[#FFFFFF] font-montserrat font-semibold max-[375px]:text-[18px] max-[320px]:text-[14px]">
          Успейте открыть пробную неделю
        </span>
        <div className="w-[167px] h-[52px] flex items-center justify-between max-[375px]:w-[136px] max-[375px]:h-[42px] max-[320px]:w-[126px] max-[320px]:h-[36px]">
          <StarIcon />
          <Timer />
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
            <div className="w-[754px] h-[867px] max-[375px]:w-[359px] max-[320px]:w-[304px]">
              <div className="flex flex-wrap gap-4 mt-[14px] w-[100%] h-[545px] max-[375px]:flex-nowrap max-[320px]:flex-nowrap max-[375px]:flex-col max-[320px]:flex-col max-[375px]:gap-2 max-[320px]:gap-2 max-[375px]:h-[545px] max-[320px]:h-[495px]">
                <RenderTariffCard
                  handleTariffClick={handleTariffClick}
                  selectedTarriff={selectedTarriff}
                  dataAllTariff={dataAllTariff}
                />
              </div>
              <div className="flex p-[12px_20px_15px_20px] bg-[#313637] mt-[20px] w-[499px] h-[78px] rounded-[20px] max-[375px]:mt-[10px] max-[320px]:mt-[10px] max-[375px]:w-[100%] max-[320px]:w-[100%] max-[375px]:h-[76px] max-[320px]:h-[76px] max-[375px]:p-[8px_40px_18px_15px] max-[320px]:p-[8px_20px_18px_15px]">
                <AlertIcon />
                <span className="m-[2px_0_0_8px] text-[#FFFFFF] text-[16px] font-montserrat font-regular max-[375px]:text-[12px] max-[320px]:text-[12px] max-[375px]:mt-[5px] max-[320px]:mt-[5px]">
                  Следуя плану на 3 месяца и более, люди получают в 2 раза
                  лучший результат, чем за 1 месяц
                </span>
              </div>
              <div className="flex items-center mt-[30px] w-[649px] h-[36px] max-[375px]:w-[100%] max-[320px]:w-[100%] max-[375px]:mt-[10px] max-[320px]:mt-[10px]">
                <Checkbox
                  validationCheckbox={validationCheckbox}
                  handleChange={handleChangeChecked}
                />
                <div className="m-[5px_0_0_15px] text-[#CDCDCD] text-[16px] font-montserrat font-regular leading-none max-[375px]:text-[12px] max-[320px]:text-[12px]">
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
                handleClick={handleClickBuy}
                title="Купить"
                className={`mt-[16px] cursor-pointer w-[352px] h-[66px] rounded-[20px] bg-[#FDB056] text-[20px] font-montserrat font-bold max-[375px]:w-[100%] max-[320px]:w-[100%] max-[375px]:h-[63px] max-[320px]:h-[55px] ${isBlinking}`}
              />
              <div className="mt-[14px] text-[#9B9B9B] text-[14px] w-[748px] h-[68px] font-montserrat font-regular max-[375px]:w-[100%] max-[320px]:w-[100%] max-[375px]:h-[72px] max-[320px]:h-[84px] max-[375px]:text-[10px] max-[320px]:text-[10px]">
                Нажимая кнопку «Купить», Пользователь соглашается на разовое
                списание денежных средств для получения пожизненного доступа к
                приложению. Пользователь соглашается, что данные
                кредитной/дебетовой карты будут сохранены для осуществления
                покупок дополнительных услуг сервиса в случае желания
                пользователя.
              </div>
            </div>
          </div>
          <div className="p-[20px] mt-[66px] w-[1216px] h-[231px] border border-[#484D4E] rounded-[30px] max-[375px]:mt-[260px] max-[320px]:mt-[162px] max-[375px]:w-[100%] max-[320px]:w-[100%]  max-[375px]:p-[10px] max-[320px]:p-[10px] max-[375px]:h-[166px] max-[320px]:h-[185px]">
            <div className="flex items-center justify-center w-[461px] h-[68px] bg-[#2D3233] rounded-[30px] border border-[#81FE95]  max-[375px]:w-[294px] max-[320px]:w-[100%] max-[375px]:h-[44px] max-[320px]:h-[41px]">
              <span className="text-[#81FE95] text-[28px] font-montserrat font-medium max-[375px]:text-[18px] max-[320px]:text-[16px]">
                гарантия возврата 30 дней
              </span>
            </div>
            <div className="mt-[30px] w-[1176px] h-[93px] text-[24px] text-[#DCDCDC] font-montserrat font-regular leading-tight max-[375px]:w-[100%] max-[320px]:w-[100%] max-[375px]:mt-[10px] max-[320px]:mt-[10px] max-[375px]:text-[14px] max-[320px]:tex-[13px]">
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
