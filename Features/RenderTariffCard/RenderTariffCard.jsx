import TariffCard from '../../components/ui/TariffCard/TariffCard';
import { useSelector } from 'react-redux';

const RenderTariffCard = ({
  dataAllTariff,
  handleTariffClick,
  selectedTarriff,
}) => {
  const discountHasDisappeared = useSelector(
    (state) => state.setDiscountHasDisappeared.discountHasDisappeared
  );

  return (
    <>
      {dataAllTariff?.map((item, index) => {
        const percent =
          item.full_price > item.price
            ? Math.round(
                ((item.full_price - item.price) / item.full_price) * 100
              )
            : 0;

        return (
          <TariffCard
            key={index}
            title={item.period}
            price={`${item.price} ₽`}
            percent={`-${percent}%`}
            description={item.text}
            originalPrice={`${item.full_price} ₽`}
            hit={item.is_best}
            onClick={() => handleTariffClick(index)}
            isSelected={selectedTarriff === index}
            discountHasDisappeared={discountHasDisappeared}
          />
        );
      })}
    </>
  );
};

export default RenderTariffCard;
