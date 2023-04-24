import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css'
import {useDispatch} from 'react-redux'

import { uiActions } from '../../store/ui-slice';

const MainHeader = (props) => {
  const dispatch = useDispatch();

  const handleCartToggle = () => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    dispatch(uiActions.toggleCart());
  }

  return (
    <header className={classes.header}>
      <h1>CMD</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={handleCartToggle}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
