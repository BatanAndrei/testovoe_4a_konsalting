import TariffCard from '../../components/ui/TariffCard/TariffCard';

const RenderTariffCard = ({
  dataAllTariff,
  handleTariffClick,
  selectedTarriff,
}) => {
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
          />
        );
      })}
    </>
  );
};

export default RenderTariffCard;
