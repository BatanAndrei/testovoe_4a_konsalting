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
        />
      );
  }
};

export default TariffCard;
