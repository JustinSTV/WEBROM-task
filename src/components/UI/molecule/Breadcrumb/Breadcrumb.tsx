import "./Breadcrumb.css";
import { IoHomeOutline } from "react-icons/io5";
import { PiGreaterThan } from "react-icons/pi";

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb">
      <a>
        <IoHomeOutline />
      </a>
      <PiGreaterThan />
      <a className="btn-2">Produktų kategorijos</a>
      <PiGreaterThan />
      <span className="btn-2">Sodo augalai</span>
    </nav>
  );
};

export default Breadcrumb;
