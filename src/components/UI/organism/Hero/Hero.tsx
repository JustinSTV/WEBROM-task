import "./Hero.css";
import Breadcrumb from "../../molecule/Breadcrumb/Breadcrumb";
import AddProductBtn from "../../atom/AddProductBtn/AddProductBtn";

const Hero = () => {
  return (
    <>
      <Breadcrumb />
      <header className="hero">
        <h1>Sodo augalai</h1>
        <AddProductBtn />
      </header>
    </>
  );
};

export default Hero;
