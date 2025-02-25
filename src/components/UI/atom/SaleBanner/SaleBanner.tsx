import "./SaleBanner.css";

type SaleBannerProps = {
  show: boolean;
};

const SaleBanner = ({ show }: SaleBannerProps) => {
  if (!show) return null;

  return (
    <div className="sale-banner">
      <span className="caption-1">Išpardavimas!</span>
    </div>
  );
};

export default SaleBanner;
