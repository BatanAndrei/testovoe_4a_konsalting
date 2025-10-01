import TariffHit from './TariffHit';
import TariffRegular from './TariffRegular';

const TariffCardDesck = ({
  hit = false,
  title,
  price,
  percent,
  description,
  originalPrice,
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

export default TariffCardDesck;
