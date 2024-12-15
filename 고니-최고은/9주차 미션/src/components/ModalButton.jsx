import { clearCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const ModalButton = () => {
  const dispatch = useDispatch();
  return (
    <div className="btn-container">
      <button
        type="button"
        className="btn confirm-btn"
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        네
      </button>
      <button type="button" className="btn clear-btn" onClick={() => {}}>
        아니오
      </button>
    </div>
  );
};

export default ModalButton;
