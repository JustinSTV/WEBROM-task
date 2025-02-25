import "./AddProductBtn.css";
import { FaPlus } from "react-icons/fa6";

const AddProductBtn = () => {
  return (
    <button className="btn-1 addProductBtn">
      Pridėti produktą <FaPlus />
    </button>
  );
};

export default AddProductBtn;
