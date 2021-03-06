import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBtn = () => {
  const navStyle = {
    color: 'grey',
  };

  const state = useSelector((state) => state);
  return (
    <>
      <NavLink style={navStyle} to="/cart" className="btn btn-light ms-2">
        <span className="fa fa-shopping-basket me-1"></span>
        {state.map((item) => item.qty).reduce((prev, curr) => prev + curr, 0)}
      </NavLink>
    </>
  );
};

export default CartBtn;
