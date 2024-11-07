interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <h3>Cart</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button className="btn btn-success" onClick={onClear}>
        Clear
      </button>
    </>
  );
};

export default Cart;
