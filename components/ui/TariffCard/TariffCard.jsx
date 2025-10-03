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
        />
      );
  }
};

export default TariffCard;
