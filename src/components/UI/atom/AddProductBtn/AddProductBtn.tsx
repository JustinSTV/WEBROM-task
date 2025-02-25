import { useNavigate } from "react-router-dom";
import "./AddProductBtn.css";
import { FaPlus } from "react-icons/fa6";

const AddProductBtn = () => {
  const navigate = useNavigate();

  return (
    <button className="btn-1 addProductBtn" onClick={() => navigate("/add-product")}>
      Pridėti produktą <FaPlus />
    </button>
  );
};

export default AddProductBtn;
