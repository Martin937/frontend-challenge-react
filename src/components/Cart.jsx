import React from 'react';

import HeartWhite from '../icons/HeartWhite.svg';
import HeartRead from '../icons/HeartRead.svg';

function Cart({ id, url, visible, changeFavorite }) {
  const styleCart = {
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const toggleClass = visible ? 'show' : 'hide';

  return (
    <div className='cart' style={styleCart}>
      <img
        className='cart__icon cart__icon_white hide'
        src={HeartWhite}
        alt='heart-white'
        onClick={() => changeFavorite(id)}
      />
      <img
        className={`cart__icon cart__icon_red ${toggleClass} `}
        src={HeartRead}
        alt='heart-red'
      />
    </div>
  );
}
export default Cart;
