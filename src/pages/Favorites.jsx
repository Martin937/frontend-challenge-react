import Loader from '../components/Loader';
import Cart from '../components/Cart';

function Favorites({ data, changeFavorite }) {
  const cats = data.map((cat) =>
    cat.visible ? (
      <Cart
        key={cat.id}
        id={cat.id}
        url={cat.url}
        visible={cat.visible}
        changeFavorite={changeFavorite}
      />
    ) : null
  );

  return (
    <>
      <div className='images-container'>{!data.length ? <Loader /> : cats}</div>
    </>
  );
}
export default Favorites;
