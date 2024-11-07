import { IoMdCart } from "react-icons/io";

interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return (
    <div>
      <IoMdCart />
      {cartItemsCount}
    </div>
  );
};

export default NavBar;
