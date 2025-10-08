import TariffHit from './TariffHit';
import TariffRegular from './TariffRegular';

const TariffCard = ({
  hit = false,
  title,
  price,
  percent,
  description,
  originalPrice,
  shortDescription,
  onClick,
  isSelected,
  discountHasDisappeared,
}) => {
  switch (hit) {
    case true:
      return (
        <TariffHit
          title={title}
          price={price}
          percent={percent}
          description={description}
          originalPrice={originalPrice}
          shortDescription={shortDescription}
          onClick={onClick}
          isSelected={isSelected}
          discountHasDisappeared={discountHasDisappeared}
        />
      );
    case false:
      return (
        <TariffRegular
          title={title}
          price={price}
          percent={percent}
          description={description}
          originalPrice={originalPrice}
          onClick={onClick}
          isSelected={isSelected}
          discountHasDisappeared={discountHasDisappeared}
        />
      );
    default:
      return (
        <TariffRegular
          title={title}
          price={price}
          percent={percent}
          description={description}
          originalPrice={originalPrice}
          onClick={onClick}
          isSelected={isSelected}
          discountHasDisappeared={discountHasDisappeared}
        />
      );
  }
};

export default TariffCard;
